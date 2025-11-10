---
title: Intl.Locale.prototype.numeric
short-title: numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
l10n:
  sourceCommit: e509776556a47f12843b91ab5c6e9be6585698c6
---

Die **`numeric`** Zugriffseigenschaft von {{jsxref("Intl.Locale")}}-Instanzen gibt zurück, ob diese Locale eine spezielle Kollationsbehandlung für numerische Zeichen hat.

## Beschreibung

Ähnlich wie {{jsxref("Intl/Locale/caseFirst", "caseFirst")}} repräsentiert `numeric` eine Modifikation der Kollationsregeln, die von der Locale genutzt werden. `numeric` ist ein boolescher Wert, was bedeutet, dass er entweder `true` oder `false` sein kann. Wenn `numeric` auf `false` gesetzt ist, gibt es keine spezielle Behandlung von numerischen Werten in Zeichenfolgen. Ist `numeric` auf `true` gesetzt, wird die Locale numerische Zeichen bei der Kollision von Zeichenfolgen berücksichtigen. Diese spezielle numerische Behandlung bedeutet, dass Folgen von Dezimalziffern als Zahlen verglichen werden. Zum Beispiel wird die Zeichenfolge "A-21" als kleiner angesehen als "A-123".

Der Wert der `numeric`-Eigenschaft wird zur Erstellungszeit festgelegt, entweder durch den `kn`-Schlüssel des Locale-Bezeichners oder durch die `numeric`-Option des {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktors. Letzterer hat Vorrang, wenn beide vorhanden sind; und wenn keiner vorhanden ist, hat die Eigenschaft den Wert `undefined`.

Der Set-Zugriff von `numeric` ist `undefined`. Sie können diese Eigenschaft nicht direkt ändern.

## Beispiele

Wie andere Locale-Subtags kann der `numeric`-Wert dem {{jsxref("Intl.Locale")}}-Objekt über den Locale-String oder ein Konfigurationsobjekt-Argument des Konstructors hinzugefügt werden.

### Hinzufügen eines `numeric`-Wertes über den Locale-String

Im [Unicode-Locale-String-Spezifikation](https://www.unicode.org/reports/tr35/) ist `numeric` ein "Extension-Subtag". Diese Subtags fügen zusätzliche Daten über die Locale hinzu und werden mit dem `-u`-Erweiterungsschlüssel zu Locale-Bezeichnern hinzugefügt. Um den `numeric`-Wert zum anfänglichen Locale-Bezeichner-String hinzuzufügen, der an den {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor übergeben wird, fügen Sie zuerst den `-u`-Erweiterungsschlüssel hinzu, falls er nicht existiert. Fügen Sie als Nächstes die `-kn`-Erweiterung hinzu, um anzuzeigen, dass Sie einen Wert für `numeric` hinzufügen. Schließlich fügen Sie den `numeric`-Wert hinzu. Wenn Sie `numeric` auf `true` setzen möchten, genügt die Hinzufügung des `kn`-Schlüssels. Um den Wert auf `false` zu setzen, müssen Sie `"false"` nach dem `kn`-Schlüssel hinzufügen.

```js
const locale = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(locale.numeric); // "false"
```

### Hinzufügen eines `numeric`-Wertes über das Konfigurationsobjekt-Argument

Der {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}}-Konstruktor hat ein optionales Konfigurationsobjekt-Argument, das verschiedene Erweiterungstypen enthalten kann, einschließlich `numeric`. Setzen Sie die `numeric`-Eigenschaft des Konfigurationsobjekts auf den gewünschten `numeric`-Wert und übergeben Sie es dann an den Konstruktor.

```js
const locale = new Intl.Locale("en-Latn-US", { numeric: true });
console.log(locale.numeric); // "true"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Intl.Locale")}}
