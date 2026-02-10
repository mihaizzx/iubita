# Advent Calendar - Funcționalitate de Blocare pe Zi

## Ce am implementat:

### 1. Verificare automată a datei
- Fiecare căsuță din calendarul Advent poate fi deschisă doar în ziua corespunzătoare din decembrie
- Zilele viitoare sunt blocate automat și nu pot fi deschise prematur

### 2. Mesaj personalizat
Când încerci să deschizi o căsuță prea devreme, apare mesajul:
**"E prea devreme să deschizi acest cadou iubita"**
Împreună cu un reminder: "Revino pe [ziua] decembrie! "

### 3. Indicator vizual
- Zilele blocate au:
  - Opacitate redusă (50%)
  - Icon de lacăt () în colțul din dreapta sus
  - Cursor "not-allowed" la hover
  - Fără efecte de hover (nu se ridică și nu se măresc)

### 4. Logica de funcționare:
- Se verifică dacă este luna decembrie (luna 11 în JavaScript, 0-indexed)
- Se compară ziua curentă cu numărul căsuței
- Dacă ziua curentă >= numărul căsuței  se poate deschide
- Dacă nu  apare mesajul de avertizare

### 5. Fișiere modificate:
- **calendar.js** - Adăugat funcția `canOpenDay()` și logica de verificare
- **calendar-locked.css** - Nou fișier cu stiluri pentru căsuțele blocate
- **calendar.html** - Adăugat link către noul fișier CSS

### 6. Păstrarea funcționalității existente:
- Căsuțele deschise rămân marcate în localStorage
- Design-ul original este păstrat
- Ziua 25 rămâne specială cu animația pulse

## Testare:
Pentru a testa funcționalitatea:
1. Deschide calendar.html în browser
2. Încearcă să deschizi o căsuță cu număr mai mare decât ziua curentă
3. Verifică că apare mesajul personalizat
4. La începutul lunii decembrie, căsuțele vor fi deblocate progresiv

## Note:
- Funcționează doar în luna decembrie
- În alte luni, toate căsuțele vor fi blocate
- Perfect pentru un advent calendar autentic! 
