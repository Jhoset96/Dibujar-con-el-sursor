import matplotlib.pyplot as plt
import random
import math


def lanzamiento_de_dado():
    
    
    resultados=[]
    
    azar=random.random()
    i=0
    
    while i<300:
        
        azar=random.random()
        
        lanzamiento=int(azar*10)
        
        if lanzamiento <= 6:
            
            resultados.append(lanzamiento)
            i+=1    
            
    return resultados



def crear_histograma():
    
    lista=lanzamiento_de_dado()
    intervalos=[1,2,3,4,5,6,7]
    plt.figure()
    plt.hist(x=lista,bins=intervalos,rwidth=0.85)
    plt.xlabel("numeros posibles")
    plt.ylabel("frecuencia absoluta")
    plt.savefig("histograma.png")
    
z=crear_histograma()

    
    
def desviacion_estandar_y_promedio():
    
    
    lista=lanzamiento_de_dado()
    i=0
    suma=0
    for i in range(len(lista)):
        
        suma=suma+lista[i]
        
    promedio=suma/len(lista)   
    

    i=0
    sumatoria=0
    division=0
    desviacion=0
    
    for i in range(len(lista)):
        
        sumatoria=sumatoria + math.pow((lista[i]-promedio),2)
    
    division=sumatoria/(len(lista)-1)
    
    desviacion=math.pow(division,0.5)
    
    mensaje="f'promedio= "+ str(promedio) + " " + "desviacion= " + str(desviacion)
    
    print(mensaje)
        

m=desviacion_estandar_y_promedio()    
