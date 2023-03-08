public with sharing class Random {
    
    private static Set<Integer> generatedNumbers = new Set<Integer>();
    
    @AuraEnabled
    public static Integer getRandomNum(Integer min, Integer max) {
        Integer randomNum = Integer.valueOf(Math.round(Math.random() * (max - min) + min));
        
        while (generatedNumbers.contains(randomNum)) {
            randomNum = Integer.valueOf(Math.round(Math.random() * (max - min) + min));
        }
        
        generatedNumbers.add(randomNum);
        
        return randomNum;
    }
}
