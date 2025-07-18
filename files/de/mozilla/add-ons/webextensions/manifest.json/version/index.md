---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Ja</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td><pre class="brush: json">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

Der **Versionsstring** für die Erweiterung.

## Versionsformat

Der Versionsstring besteht aus 1 bis 4 Zahlen, die durch Punkte getrennt sind, zum Beispiel `1.2.3.4`. Zahlen, die nicht Null sind, dürfen keine führende Null enthalten. Zum Beispiel ist `2.01` nicht erlaubt; jedoch sind `0.2`, `2.0.1` und `2.10` erlaubt.

Erweiterungsspeicher und Browser können durchsetzen oder warnen, wenn der Versionsstring nicht diesem Format entspricht. Sie können auch Einschränkungen für den Bereich verfügbarer Zahlen anwenden. Zum Beispiel:

- [addons.mozilla.org](https://addons.mozilla.org/) (AMO) erlaubt Versionsstrings, die Zahlen mit bis zu neun Ziffern verwenden, entsprechend diesem regulären Ausdruck `^(0|[1-9][0-9]{0,8})([.](0|[1-9][0-9]{0,8})){0,3}$`. Auch ab Firefox 108 wird eine Warnung angezeigt, wenn eine Erweiterung mit einer Versionsnummer installiert wird, die nicht diesem Format entspricht.
- Der Chrome Web Store erfordert [Zahlen zwischen 0 und 65535](https://developer.chrome.com/docs/extensions/reference/manifest/version) und erlaubt keine Erweiterungsstrings, die ausschließlich aus Nullen bestehen. Zum Beispiel sind 0.0 oder 0.0.0.0 nicht erlaubt.

Es kann möglich sein, eine Erweiterung zu erstellen, die in einem Browser so aussieht, als hätte sie eine gültige Versionsnummer, aber nicht den Anforderungen des Stores entspricht. Es sollte besondere Sorgfalt walten gelassen werden, wenn browserübergreifende Erweiterungen entwickelt werden, die große Zahlen verwenden.

Einige Browser und Onlineshops erkennen den [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) Schlüssel. Dieser Schlüssel ermöglicht es Ihnen, einen beschreibenden Versionsstring anzugeben, der möglicherweise anstelle der Versionsnummer angezeigt wird. Zum Beispiel `1.0 beta`.

### Versionen vergleichen

Um zu bestimmen, welche von zwei Erweiterungsversionen die aktuellere ist, werden die Zahlen der Versionsstrings von links nach rechts verglichen. Ein fehlendes Elemente eines Versionsstrings entspricht `0`. Zum Beispiel entspricht 1.0 der Version 1.0.0.0. Der erste Versionsstring, bei dem eine Zahl größer als die entsprechende Zahl im anderen Versionsstring ist, ist die aktuellere Version. Zum Beispiel ist 1.10 eine aktuellere Version als 1.9.

## Legacy-Versionsformate

Sehen Sie unter [Legacy-Versionsformate](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) für Details zu früher unterstützten Versionsstrings nach.

## Zugriff auf die Versionsnummer im Code

Sie erhalten die Erweiterungsversion in Ihrem JavaScript-Code mit:

```js
console.log(browser.runtime.getManifest().version);
```

Wenn das `manifest` enthält:

```json
"version": "0.1"
```

sehen Sie dies im Konsolenprotokoll:

```plain
"0.1"
```

## Browser-Kompatibilität

{{Compat}}
