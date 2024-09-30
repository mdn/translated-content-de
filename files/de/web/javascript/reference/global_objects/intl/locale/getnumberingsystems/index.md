---
title: Intl.Locale.prototype.getNumberingSystems()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/getNumberingSystems
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`getNumberingSystems()`** Methode von {{jsxref("Intl.Locale")}} Instanzen gibt eine Liste von einem oder mehreren einzigartigen [Nummerierungssystem](https://en.wikipedia.org/wiki/Numeral_system)-Bezeichnern für diese Locale zurück.

> [!NOTE]
> In einigen Versionen bestimmter Browser wurde diese Methode als Zugriffs-Eigenschaft namens `numberingSystems` implementiert. Da diese jedoch bei jedem Zugriff ein neues Array zurückgibt, ist sie jetzt als Methode implementiert, um die Situation zu vermeiden, dass `locale.numberingSystems === locale.numberingSystems` `false` zurückgibt. Prüfen Sie die [Browser-Kompatibilitätstabelle](#browser-kompatibilität) für Details.

## Syntax

```js-nolint
getNumberingSystems()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von Zeichenfolgen, das alle für die `Locale` üblichen Nummerierungssysteme repräsentiert, sortiert in absteigender Präferenz. Wenn die `Locale` bereits ein [`numberingSystem`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem) hat, dann enthält das zurückgegebene Array diesen einzelnen Wert.

Eine Tabelle der standardmäßigen Unicode-Zahlensysteme kann unten angesehen werden.

### Unterstützte Typen von Nummerierungssystemen

| Wert     | Beschreibung                                                               |
| -------- | -------------------------------------------------------------------------- |
| adlm     | Adlam-Ziffern                                                              |
| ahom     | Ahom-Ziffern                                                               |
| arab     | Arabisch-Indische Ziffern                                                  |
| arabext  | Erweiterte Arabisch-Indische Ziffern                                       |
| armn     | Armenische Großbuchstaben-Zahlen - algorithmisch                           |
| armnlow  | Armenische Kleinbuchstaben-Zahlen - algorithmisch                          |
| bali     | Balinesische Ziffern                                                       |
| beng     | Bengalische Ziffern                                                        |
| bhks     | Bhaiksuki-Ziffern                                                          |
| brah     | Brahmi-Ziffern                                                             |
| cakm     | Chakma-Ziffern                                                             |
| cham     | Cham-Ziffern                                                               |
| cyrl     | Kyrillische Zahlen - algorithmisch                                         |
| deva     | Devanagari-Ziffern                                                         |
| ethi     | Äthiopische Zahlen - algorithmisch                                         |
| finance  | Finanzzahlen - möglicherweise algorithmisch                                |
| fullwide | Vollbreite Ziffern                                                         |
| geor     | Georgische Zahlen - algorithmisch                                          |
| gong     | Gunjala-Gondi-Ziffern                                                      |
| gonm     | Masaram-Gondi-Ziffern                                                      |
| grek     | Griechische Großbuchstabenzahlen - algorithmisch                           |
| greklow  | Griechische Kleinbuchstabenzahlen - algorithmisch                          |
| gujr     | Gujarati-Ziffern                                                           |
| guru     | Gurmukhi-Ziffern                                                           |
| hanidays | Han-Zeichen für das Monatsdatum in Mond-/anderen traditionellen Kalendern  |
| hanidec  | Positionelles Dezimalsystem mit chinesischen Zahlenideografien als Ziffern |
| hans     | Vereinfachte chinesische Zahlen - algorithmisch                            |
| hansfin  | Vereinfachte chinesische Finanzzahlen - algorithmisch                      |
| hant     | Traditionelle chinesische Zahlen - algorithmisch                           |
| hantfin  | Traditionelle chinesische Finanzzahlen - algorithmisch                     |
| hebr     | Hebräische Zahlen - algorithmisch                                          |
| hmng     | Pahawh-Hmong-Ziffern                                                       |
| hmnp     | Nyiakeng Puachue Hmong-Ziffern                                             |
| java     | Javanische Ziffern                                                         |
| jpan     | Japanische Zahlen - algorithmisch                                          |
| jpanfin  | Japanische Finanzzahlen - algorithmisch                                    |
| jpanyear | Japanische Gannen-Zählung für das japanische Kalenderjahr                  |
| kali     | Kayah-Li-Ziffern                                                           |
| khmr     | Khmer-Ziffern                                                              |
| knda     | Kannada-Ziffern                                                            |
| lana     | Tai Tham Hora (weltliche) Ziffern                                          |
| lanatham | Tai Tham (kirchliche) Ziffern                                              |
| laoo     | Lao-Ziffern                                                                |
| latn     | Lateinische Ziffern                                                        |
| lepc     | Lepcha-Ziffern                                                             |
| limb     | Limbu-Ziffern                                                              |
| mathbold | Mathematische fettgedruckte Ziffern                                        |
| mathdbl  | Mathematische Doppelstrich-Ziffern                                         |
| mathmono | Mathematische Monospace-Ziffern                                            |
| mathsanb | Mathematische fettgedruckte Sans-Serif-Ziffern                             |
| mathsans | Mathematische Sans-Serif-Ziffern                                           |
| mlym     | Malayalam-Ziffern                                                          |
| modi     | Modi-Ziffern                                                               |
| mong     | Mongolische Ziffern                                                        |
| mroo     | Mro-Ziffern                                                                |
| mtei     | Meetei-Mayek-Ziffern                                                       |
| mymr     | Myanmar-Ziffern                                                            |
| mymrshan | Myanmar-Shan-Ziffern                                                       |
| mymrtlng | Myanmar-Tai-Laing-Ziffern                                                  |
| native   | Natürliche Ziffern                                                         |
| newa     | Newa-Ziffern                                                               |
| nkoo     | N'Ko-Ziffern                                                               |
| olck     | Ol-Chiki-Ziffern                                                           |
| orya     | Oriya-Ziffern                                                              |
| osma     | Osmanya-Ziffern                                                            |
| rohg     | Hanifi Rohingya-Ziffern                                                    |
| roman    | Römische Großbuchstabenzahlen - algorithmisch                              |
| romanlow | Römische Kleinbuchstabenzahlen - algorithmisch                             |
| saur     | Saurashtra-Ziffern                                                         |
| shrd     | Sharada-Ziffern                                                            |
| sind     | Khudawadi-Ziffern                                                          |
| sinh     | Singhalesische Lith-Ziffern                                                |
| sora     | Sora-Sompeng-Ziffern                                                       |
| sund     | Sudanische Ziffern                                                         |
| takr     | Takri-Ziffern                                                              |
| talu     | Neue Tai-Lue-Ziffern                                                       |
| taml     | Tamilische Zahlen - algorithmisch                                          |
| tamldec  | Moderne Tamilische Dezimalzahlen                                           |
| telu     | Telugu-Ziffern                                                             |
| thai     | Thailändische Ziffern                                                      |
| tirh     | Tirhuta-Ziffern                                                            |
| tibt     | Tibetische Ziffern                                                         |
| traditio | Traditionelle Zahlen - möglicherweise algorithmisch                        |
| vaii     | Vai-Ziffern                                                                |
| wara     | Warang-Citi-Ziffern                                                        |
| wcho     | Wancho-Ziffern                                                             |

## Beispiele

### Abrufen unterstützter Nummerierungssysteme

Falls das `Locale`-Objekt noch kein `numberingSystem` hat, listet `getNumberingSystems()` alle gängig verwendeten Nummerierungssysteme für die gegebene `Locale` auf. Für Beispiele zum expliziten Setzen eines `numberingSystem`, siehe [`numberingSystem` Beispiele](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem#examples).

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
