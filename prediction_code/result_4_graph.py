# -*- coding: utf-8 -*-
"""
Created on Tue Jul 10 21:13:56 2018

@author: ss
"""
import json
import os

def getResultsList(dir_name,file_name):
    list_results = []
    with open(os.path.join(dir_name,file_name)) as json_data:
        results = json.load(json_data)
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])   
    list_results.append(round((Pop[0]/Total)*100,2))
    list_results.append(round((Pop[1]/Total)*100,2))
    list_results.append(round((Pop[2]/Total)*100,2)) 
    return list_results


PTI_line = []
PMLN_line = []
PPP_line = []
dir_name_pakistan = "E:\Semester3\GE2018\graphs\prediction_code/results\Pakistan\original"
dir_name_punjab = "E:\Semester3\GE2018\graphs\prediction_code/results\Punjab\original"
dir_name_sindh = "E:\Semester3\GE2018\graphs\prediction_code/results\Sindh\original"
dir_name_kpk = "E:\Semester3\GE2018\graphs\prediction_code/results\KPK\original"
dir_name_balouchistan = "E:\Semester3\GE2018\graphs\prediction_code/results\Balouchistan\original"

dir_name_save = "E:\Semester3\GE2018\graphs\prediction_code/results\graph_results"

list_of_files_pakistan = os.listdir(dir_name_pakistan)
list_of_files_punjab = os.listdir(dir_name_punjab)
list_of_files_sindh = os.listdir(dir_name_sindh)
list_of_files_kpk = os.listdir(dir_name_kpk)
list_of_files_balouchistan = os.listdir(dir_name_balouchistan)


#==============================================================================
# Overall Pakistan's Results
#==============================================================================
PTI_line = []
PMLN_line = []
PPP_line = []
for file in list_of_files_pakistan:
    ## Load Results from relative file
    with open(os.path.join(dir_name_pakistan,file)) as json_data:
        results = json.load(json_data)
    #     
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])   
    PTI_line.append(round((Pop[0]/Total)*100,2))
    PMLN_line.append(round((Pop[1]/Total)*100,2))
    PPP_line.append(round((Pop[2]/Total)*100,2))

Results_pakistan = {}
Results_pakistan = {
"PTI Line": PTI_line,
"PMLN Line": PMLN_line,
"PPP Line": PPP_line
}


Results_pakistan["Pakistan"] = getResultsList(dir_name_pakistan,list_of_files_pakistan[-1])
Results_pakistan["Punjab"] = getResultsList(dir_name_punjab,list_of_files_punjab[-1])
Results_pakistan["Sindh"] = getResultsList(dir_name_sindh,list_of_files_sindh[-1])
Results_pakistan["KPK"] = getResultsList(dir_name_kpk,list_of_files_kpk[-1])
Results_pakistan["Balochistan"] = getResultsList(dir_name_balouchistan,list_of_files_balouchistan[-1])

with open( os.path.join(dir_name_save,"pakistan.json"), "w") as write_file:
        json.dump(Results_pakistan, write_file)

#==============================================================================
# Overall Punjab's Results
#==============================================================================
PTI_line = []
PMLN_line = []
PPP_line = []
for file in list_of_files_punjab:
    ## Load Results from relative file
    with open(os.path.join(dir_name_punjab,file)) as json_data:
        results = json.load(json_data)
    #     
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])   
    PTI_line.append(round((Pop[0]/Total)*100,2))
    PMLN_line.append(round((Pop[1]/Total)*100,2))
    PPP_line.append(round((Pop[2]/Total)*100,2))


Results_punjab = {}
Results_punjab = {
"PTI Line": PTI_line,
"PMLN Line": PMLN_line,
"PPP Line": PPP_line
}


Results_punjab["Punjab"] = getResultsList(dir_name_punjab,list_of_files_punjab[-1])


with open( os.path.join(dir_name_save,"punjab.json"), "w") as write_file:
        json.dump(Results_punjab, write_file)

#==============================================================================
# Overall Sindh's Results
#==============================================================================
PTI_line = []
PMLN_line = []
PPP_line = []
for file in list_of_files_sindh:
    ## Load Results from relative file
    with open(os.path.join(dir_name_sindh,file)) as json_data:
        results = json.load(json_data)
    #     
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])
    PTI_line.append(round((Pop[0]/Total)*100,2))
    PMLN_line.append(round((Pop[1]/Total)*100,2))
    PPP_line.append(round((Pop[2]/Total)*100,2))


Results_sindh = {
"PTI Line": PTI_line,
"PMLN Line": PMLN_line,
"PPP Line": PPP_line
}


Results_sindh["Sindh"] = getResultsList(dir_name_sindh,list_of_files_sindh[-1])


with open( os.path.join(dir_name_save,"sindh.json"), "w") as write_file:
        json.dump(Results_sindh, write_file) 
        
#==============================================================================
# Overall KPK's Results
#==============================================================================
PTI_line = []
PMLN_line = []
PPP_line = []
for file in list_of_files_kpk:
    ## Load Results from relative file
    with open(os.path.join(dir_name_kpk,file)) as json_data:
        results = json.load(json_data)
    #     
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])   
    PTI_line.append(round((Pop[0]/Total)*100,2))
    PMLN_line.append(round((Pop[1]/Total)*100,2))
    PPP_line.append(round((Pop[2]/Total)*100,2))


Results_kpk = {
"PTI Line": PTI_line,
"PMLN Line": PMLN_line,
"PPP Line": PPP_line
}


Results_kpk["KPK"] = getResultsList(dir_name_kpk,list_of_files_kpk[-1])


with open( os.path.join(dir_name_save,"kpk.json"), "w") as write_file:
        json.dump(Results_kpk, write_file)         
        
#==============================================================================
# Overall Balouchistan's Results
#==============================================================================
for file in list_of_files_balouchistan:
    ## Load Results from relative file
    with open(os.path.join(dir_name_balouchistan,file)) as json_data:
        results = json.load(json_data)
    #     
    Pop = results[ "Popularity"]
    Total = abs(Pop[0]) + abs(Pop[1]) + abs(Pop[2])   
    PTI_line.append(round((Pop[0]/Total)*100,2))
    PMLN_line.append(round((Pop[1]/Total)*100,2))
    PPP_line.append(round((Pop[2]/Total)*100,2))


Results_balouchistan = {
"PTI Line": PTI_line,
"PMLN Line": PMLN_line,
"PPP Line": PPP_line
}


Results_balouchistan["Balouchistan"] = getResultsList(dir_name_balouchistan,list_of_files_balouchistan[-1])


with open( os.path.join(dir_name_save,"balouchistan.json"), "w") as write_file:
        json.dump(Results_balouchistan, write_file)  