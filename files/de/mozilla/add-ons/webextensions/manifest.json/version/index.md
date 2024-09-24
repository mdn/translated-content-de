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

Die Versionszeichenfolge besteht aus 1 bis 4 Zahlen, die durch Punkte getrennt sind, zum Beispiel `1.2.3.4`. Bei Nicht-Null-Zahlen darf keine führende Null enthalten sein. Zum Beispiel ist `2.01` nicht erlaubt; jedoch sind `0.2`, `2.0.1` und `2.10` erlaubt.

Erweiterungsspeicher und Browser können durchsetzen oder warnen, wenn die Versionszeichenfolge diesem Format nicht entspricht. Sie können auch Einschränkungen hinsichtlich des Bereichs der verfügbaren Zahlen vornehmen. Zum Beispiel:

- [addons.mozilla.org](https://addons.mozilla.org/) (AMO) erlaubt Versionszeichenfolgen mit Zahlen von bis zu neun Ziffern, die diesem regulären Ausdruck entsprechen `^(0|[1-9][0-9]{0,8})([.](0|[1-9][0-9]{0,8})){0,3}$`. Außerdem wird ab Firefox 108 eine Warnung ausgegeben, wenn eine Erweiterung mit einer Versionsnummer installiert wird, die nicht diesem Format entspricht.
- Der Chrome Web Store erfordert [Zahlen zwischen 0 und 65535](https://developer.chrome.com/docs/extensions/reference/manifest/version) und erlaubt keine vollständig nullbasierten Erweiterungszeichenfolgen. Zum Beispiel sind 0.0 oder 0.0.0.0 nicht erlaubt.

Es kann möglich sein, eine Erweiterung zu erstellen, die beim Ausführen in einem Browser scheinbar eine gültige Versionsnummer hat, aber nicht den Anforderungen der Stores entspricht. Besondere Vorsicht ist geboten, wenn Sie browserübergreifende Erweiterungen entwickeln, die große Zahlenelemente verwenden.

Einige Browser und Web-Stores können den Schlüssel [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name) erkennen. Dieser Schlüssel ermöglicht es Ihnen, eine beschreibende Versionszeichenfolge anzugeben, die anstelle der Versionsnummer angezeigt werden kann. Zum Beispiel `1.0 beta`.

### Vergleich von Versionen

Um festzustellen, welche von zwei Erweiterungsversionen die aktuellste ist, werden die Zahlen der Versionszeichenfolge von links nach rechts verglichen. Ein fehlendes Element der Versionszeichenfolge ist gleichbedeutend mit `0`. Zum Beispiel ist 1.0 gleichbedeutend mit 1.0.0.0. Die erste Versionszeichenfolge mit einer Zahl größer als die entsprechende Zahl in der anderen Versionszeichenfolge ist die aktuellste. Zum Beispiel ist 1.10 eine neuere Version als 1.9.

## Veraltete Versionsformate

Siehe [Veraltete Versionsformate](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) für Einzelheiten zu früher unterstützten Versionszeichenfolgen.

## Zugriff auf die Versionsnummer im Code

Sie erhalten die Erweiterungsversion in Ihrem JavaScript-Code mit:

```js
console.log(browser.runtime.getManifest().version);
```

Wenn das Manifest enthält:

```json
"version": "0.1"
```

sehen Sie dies im Konsolenlog:

```plain
"0.1"
```

## Browser-Kompatibilität

{{Compat}}
