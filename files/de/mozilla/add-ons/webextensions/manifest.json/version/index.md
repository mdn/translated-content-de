---
title: version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
l10n:
  sourceCommit: 9a1a8665d37c3b75f9d9a545c4c2407296615a41
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

Der Versionsstring besteht aus 1 bis 4 durch Punkte getrennten Zahlen, zum Beispiel `1.2.3.4`. Zahlen, die nicht null sind, dürfen nicht mit einer führenden Null versehen werden. Zum Beispiel ist `2.01` nicht erlaubt; jedoch sind `0.2`, `2.0.1` und `2.10` erlaubt.

Erweiterungsspeicher und Browser können erzwingen oder warnen, wenn der Versionsstring nicht diesem Format entspricht. Sie können auch Einschränkungen für den numerischen Bereich anwenden. Zum Beispiel:

- [addons.mozilla.org](https://addons.mozilla.org/) (AMO) erlaubt Versionsstrings mit Zahlen bis zu neun Ziffern, entsprechend diesem regulären Ausdruck `^(0|[1-9][0-9]{0,8})([.](0|[1-9][0-9]{0,8})){0,3}$`. Außerdem wird ab Firefox 108 eine Warnung ausgegeben, wenn eine Erweiterung mit einer Versionsnummer installiert wird, die diesem Format nicht entspricht.
- Der Chrome Web Store erfordert [Zahlen zwischen 0 und 65535](https://developer.chrome.com/docs/extensions/reference/manifest/version) und erlaubt keine vollständig nullhaltigen Versionsstrings. Zum Beispiel sind 0.0 oder 0.0.0.0 nicht erlaubt.

Es kann möglich sein, eine Erweiterung zu erstellen, die beim Ausführen in einem Browser eine gültige Versionsnummer zu haben scheint, aber nicht den Anforderungen des Stores entspricht. Besonders bei der Entwicklung von Browser-übergreifenden Erweiterungen, die große Zahlenbereiche verwenden, sollte Sorgfalt walten.

Einige Browser und Web Stores können den [version_name](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)-Schlüssel erkennen. Dieser Schlüssel ermöglicht es Ihnen, einen beschreibenden Versionsstring bereitzustellen, der anstelle der Versionsnummer angezeigt werden kann. Zum Beispiel `1.0 beta`.

### Versionen vergleichen

Um festzustellen, welche von zwei Erweiterungsversionen die aktuellere ist, werden die Versionsstring-Zahlen von links nach rechts verglichen. Ein fehlendes Versionsstring-Element entspricht `0`. Zum Beispiel ist 1.0 gleichbedeutend mit 1.0.0.0. Der erste Versionsstring mit einer größeren Zahl als die entsprechende Zahl im anderen Versionsstring ist die aktuellere. Zum Beispiel ist 1.10 eine aktuellere Version als 1.9.

## Alte Versionsformate

Siehe [Alte Versionsformate](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version/format) für Details zu zuvor unterstützten Versionsstrings.

## Zugriff auf die Versionsnummer im Code

Sie erhalten die Erweiterungsversion in Ihrem JavaScript-Code mit:

```js
console.log(browser.runtime.getManifest().version);
```

Wenn das Manifest Folgendes enthält:

```json
"version": "0.1"
```

Sehen Sie dies im Konsolenprotokoll:

```plain
"0.1"
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{WebExtAPIRef("runtime.getVersion()")}}-Methode
- Der [`version_name`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version_name)-Manifest-Schlüssel
