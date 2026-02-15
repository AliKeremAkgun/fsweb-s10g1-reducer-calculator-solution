# Sorunu Anlamak:
1. Butona tıklandığında bir action dispatch edilir.
2. Dispatch edilen action reducer’a gider.
3. Reducer mevcut state ve action’a göre yeni state üretir.
4. useReducer hook’u yeni state’i App bileşenine verir.
5. State değiştiği için React yeniden render yapar.
6. TotalDisplay component’i state.screen değerini gösterir.
7. Böylece güncellenmiş total ekranda görünür.