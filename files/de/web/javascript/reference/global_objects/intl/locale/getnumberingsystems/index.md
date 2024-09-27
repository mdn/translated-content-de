---
title: Intl.Locale.prototype.getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getNumberingSystems()`**-Methode von {{jsxref("Intl.Locale")}}-Instanzen gibt eine Liste von einem oder mehreren eindeutigen [Nummerierungssystem](https://en.wikipedia.org/wiki/Numeral_system)-Identifikatoren für diese Locale zurück.

> [!NOTE]
> In einigen Versionen von bestimmten Browsern wurde diese Methode als Zugriffseigenschaft namens `numberingSystems` implementiert. Da sie jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie jetzt als Methode implementiert, um zu verhindern, dass `locale.numberingSystems === locale.numberingSystems` `false` zurückgibt. Überprüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenketten, das alle Nummerierungssysteme repräsentiert, die üblicherweise für die `Locale` verwendet werden, sortiert in absteigender Präferenz. Wenn die `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) hat, enthält das zurückgegebene Array diesen einzelnen Wert.

Eine Tabelle der standardmäßigen Unicode-Zahlensysteme kann unten eingesehen werden.

### Unterstützte Typen von Nummerierungssystemen

| Wert     | Beschreibung                                                                           |
| -------- | -------------------------------------------------------------------------------------- |
| adlm     | Adlam-Ziffern                                                                          |
| ahom     | Ahom-Ziffern                                                                           |
| arab     | Arabisch-Indische Ziffern                                                              |
| arabext  | Erweiterte Arabisch-Indische Ziffern                                                   |
| armn     | Armenische Großbuchstabenzahlen — algorithmisch                                        |
| armnlow  | Armenische Kleinbuchstabenzahlen — algorithmisch                                       |
| bali     | Balinesische Ziffern                                                                   |
| beng     | Bengalische Ziffern                                                                    |
| bhks     | Bhaiksuki-Ziffern                                                                      |
| brah     | Brahmi-Ziffern                                                                         |
| cakm     | Chakma-Ziffern                                                                         |
| cham     | Cham-Ziffern                                                                           |
| cyrl     | Kyrillische Zahlen — algorithmisch                                                     |
| deva     | Devanagari-Ziffern                                                                     |
| ethi     | Äthiopische Zahlen — algorithmisch                                                     |
| finance  | Finanzielle Ziffern — können algorithmisch sein                                        |
| fullwide | Vollbreiten-Ziffern                                                                    |
| geor     | Georgische Zahlen — algorithmisch                                                      |
| gong     | Gunjala Gondi-Ziffern                                                                  |
| gonm     | Masaram Gondi-Ziffern                                                                  |
| grek     | Griechische Großbuchstabenzahlen — algorithmisch                                       |
| greklow  | Griechische Kleinbuchstabenzahlen — algorithmisch                                      |
| gujr     | Gujarati-Ziffern                                                                       |
| guru     | Gurmukhi-Ziffern                                                                       |
| hanidays | Han-Zeichen-Tag-des-Monats-Nummerierung für Mondkalender/andere traditionelle Kalender |
| hanidec  | Positionsdezimalsystem unter Verwendung chinesischer Nummernideogramme als Ziffern     |
| hans     | Vereinfachte chinesische Zahlen — algorithmisch                                        |
| hansfin  | Vereinfachte chinesische finanzielle Zahlen — algorithmisch                            |
| hant     | Traditionelle chinesische Zahlen — algorithmisch                                       |
| hantfin  | Traditionelle chinesische finanzielle Zahlen — algorithmisch                           |
| hebr     | Hebräische Zahlen — algorithmisch                                                      |
| hmng     | Pahawh Hmong-Ziffern                                                                   |
| hmnp     | Nyiakeng Puachue Hmong-Ziffern                                                         |
| java     | Javanische Ziffern                                                                     |
| jpan     | Japanische Zahlen — algorithmisch                                                      |
| jpanfin  | Japanische finanzielle Zahlen — algorithmisch                                          |
| jpanyear | Japanische erste Jahre Gannen Nummerierung für japanischen Kalender                    |
| kali     | Kayah Li-Ziffern                                                                       |
| khmr     | Khmer-Ziffern                                                                          |
| knda     | Kannada-Ziffern                                                                        |
| lana     | Tai Tham Hora (weltliche) Ziffern                                                      |
| lanatham | Tai Tham (kirchliche) Ziffern                                                          |
| laoo     | Lao-Ziffern                                                                            |
| latn     | Lateinische Ziffern                                                                    |
| lepc     | Lepcha-Ziffern                                                                         |
| limb     | Limbu-Ziffern                                                                          |
| mathbold | Mathematische fette Ziffern                                                            |
| mathdbl  | Mathematische doppelgeschlagene Ziffern                                                |
| mathmono | Mathematische monospaced Ziffern                                                       |
| mathsanb | Mathematische serifenlose fette Ziffern                                                |
| mathsans | Mathematische serifenlose Ziffern                                                      |
| mlym     | Malayalam-Ziffern                                                                      |
| modi     | Modi-Ziffern                                                                           |
| mong     | Mongolische Ziffern                                                                    |
| mroo     | Mro-Ziffern                                                                            |
| mtei     | Meitei Mayek-Ziffern                                                                   |
| mymr     | Myanmar-Ziffern                                                                        |
| mymrshan | Myanmar Shan-Ziffern                                                                   |
| mymrtlng | Myanmar Tai Laing-Ziffern                                                              |
| native   | Native Ziffern                                                                         |
| newa     | Newa-Ziffern                                                                           |
| nkoo     | N'Ko-Ziffern                                                                           |
| olck     | Ol Chiki-Ziffern                                                                       |
| orya     | Oriya-Ziffern                                                                          |
| osma     | Osmanya-Ziffern                                                                        |
| rohg     | Hanifi Rohingya-Ziffern                                                                |
| roman    | Römische Großbuchstabenzahlen — algorithmisch                                          |
| romanlow | Römische Kleinbuchstabenzahlen — algorithmisch                                         |
| saur     | Saurashtra-Ziffern                                                                     |
| shrd     | Sharada-Ziffern                                                                        |
| sind     | Khudawadi-Ziffern                                                                      |
| sinh     | Sinhala Lith-Ziffern                                                                   |
| sora     | Sora_Sompeng-Ziffern                                                                   |
| sund     | Sundanesische Ziffern                                                                  |
| takr     | Takri-Ziffern                                                                          |
| talu     | Neue Tai Lue-Ziffern                                                                   |
| taml     | Tamilische Zahlen — algorithmisch                                                      |
| tamldec  | Moderne tamilische Dezimalziffern                                                      |
| telu     | Telugu-Ziffern                                                                         |
| thai     | Thailändische Ziffern                                                                  |
| tirh     | Tirhuta-Ziffern                                                                        |
| tibt     | Tibetische Ziffern                                                                     |
| traditio | Traditionelle Ziffern — können algorithmisch sein                                      |
| vaii     | Vai-Ziffern                                                                            |
| wara     | Warang Citi-Ziffern                                                                    |
| wcho     | Wancho-Ziffern                                                                         |

## Beispiele

### Ermitteln unterstützter Nummerierungssysteme

Wenn das `Locale`-Objekt noch kein `numberingSystem` hat, listet `getNumberingSystems()` alle üblicherweise verwendeten Nummerierungssysteme für das angegebene `Locale` auf. Beispiele für das explizite Setzen eines `numberingSystem` finden Sie in den [`numberingSystem`-Beispielen](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

```js
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getNumberingSystems()); // ["arab"]
```

```js
const ja = new Intl.Locale("ja");
console.log(ja.getNumberingSystems()); // ["latn"]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
- [`Intl.Locale.prototype.numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem)
- [Details zu den standardmäßigen Unicode-Zahlensystemen](https://github.com/unicode-org/cldr/blob/main/common/supplemental/numberingSystems.xml)
