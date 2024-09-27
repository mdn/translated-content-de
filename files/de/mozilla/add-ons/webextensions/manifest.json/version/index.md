---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

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

Die **Versionszeichenfolge** für die Erweiterung.

## Versionsformat

Die Versionszeichenfolge besteht aus 1 bis 4 Zahlen, die durch Punkte getrennt sind, zum Beispiel `1.2.3.4`. Zahlen ungleich Null dürfen keine führende Null enthalten. Zum Beispiel ist `2.01` nicht erlaubt; jedoch sind `0.2`, `2.0.1` und `2.10` erlaubt.

Erweiterungsspeicher und Browser können durchsetzen oder warnen, wenn die Versionszeichenfolge nicht diesem Format entspricht. Sie können auch Einschränkungen für den verfügbaren Zahlenbereich auferlegen. Zum Beispiel:

- [addons.mozilla.org](https://addons.mozilla.org/) (AMO) erlaubt Versionszeichenfolgen mit Zahlen von bis zu neun Ziffern, entsprechend diesem regulären Ausdruck `^(0|[1-9][0-9]{0,8})([.](0|[1-9][0-9]{0,8})){0,3}$`. Ab Firefox 108 wird auch eine Warnung angezeigt, wenn eine Erweiterung mit einer Versionsnummer installiert wird, die nicht diesem Format entspricht.
- Der Chrome Web Store erfordert [Zahlen zwischen 0 und 65535](https://developer.chrome.com/docs/extensions/reference/manifest/version) und erlaubt keine vollständig nullen Erweiterungszeichenfolgen. Zum Beispiel sind 0.0 oder 0.0.0.0 nicht erlaubt.

Es könnte möglich sein, eine Erweiterung zu erstellen, die beim Ausführen in einem Browser eine gültige Versionsnummer hat, aber nicht den Anforderungen des Stores entspricht. Besondere Vorsicht ist geboten, wenn plattformübergreifende Erweiterungen entwickelt werden, die große Zahlenwerte verwenden.

Einige Browser und Webstores erkennen den [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) Schlüssel. Dieser Schlüssel ermöglicht es Ihnen, eine beschreibende Versionszeichenfolge anzugeben, die möglicherweise anstelle der Versionsnummer angezeigt wird. Zum Beispiel `1.0 beta`.

### Versionen vergleichen

Um zu bestimmen, welche von zwei Erweiterungsversionen die aktuellste ist, werden die Zahlen der Versionszeichenfolge von links nach rechts verglichen. Ein fehlendes Element der Versionszeichenfolge entspricht `0`. Zum Beispiel ist 1.0 gleichbedeutend mit 1.0.0.0. Die erste Versionszeichenfolge mit einer Zahl, die größer ist als die entsprechende Zahl in der anderen Versionszeichenfolge, ist die aktuellste. Zum Beispiel ist 1.10 eine aktuellere Version als 1.9.

## Legacy-Versionsformate

Siehe [Legacy-Versionsformate](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) für Details zu zuvor unterstützten Versionszeichenfolgen.

## Zugriff auf die Versionsnummer im Code

Sie erhalten die Erweiterungsversion in Ihrem JavaScript-Code mit:

```js
console.log(browser.runtime.getManifest().version);
```

Wenn das Manifest enthält:

```json
"version": "0.1"
```

Sehen Sie dies im Konsolenprotokoll:

```plain
"0.1"
```

## Browser-Kompatibilität

{{Compat}}
