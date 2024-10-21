---
title: declarative_net_request
slug: Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"declarative_net_request" : {
  "rule_resources" : [{
    "id": "ruleset",
    "enabled": true,
    "path": "rules.json"
  }]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Spezifizieren Sie statische Regelsets zur Verwendung mit {{WebExtAPIRef("declarativeNetRequest")}}. Weitere Informationen zu der Anzahl der Regelsets, aktivierten Regelsets und Regeln, die angegeben werden können, finden Sie unter [statische Regelset-Limits](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits).

Weitere Informationen zu den Berechtigungsanforderungen finden Sie unter <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions">Berechtigungen</a>.

> [!NOTE]
> Eine Regel mit nicht erkannten Eigenschaften wird geladen, wenn sie ansonsten gültig ist, das heißt, nicht erkannte Eigenschaften werden ignoriert. Vor Firefox 128 wurde eine Regel mit nicht erkannten Eigenschaften als ungültig betrachtet und nicht geladen.

## Syntax

Der Schlüssel `"declarative_net_request"` ist ein Objekt, das die Eigenschaft `"rule_resources"` enthalten muss, ein Array, das mindestens ein Objekt mit diesen Eigenschaften umfassen muss:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>"id"</code></td>
      <td><code>String</code></td>
      <td>Eine nicht-leere Zeichenkette, die das Regelset eindeutig identifiziert. IDs, die mit '_' beginnen, sind für internen Gebrauch reserviert.</td>
    </tr>
    <tr>
      <td><code>"enabled"</code></td>
      <td><code>Boolean</code></td>
      <td>Gibt an, ob das Regelset standardmäßig aktiviert ist. Die Methode {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} kann verwendet werden, um ein Regelset zur Laufzeit zu aktivieren oder zu deaktivieren.</td>
    </tr>
    <tr>
      <td><code>"path"</code></td>
      <td><code>String</code></td>
      <td>Der Pfad des JSON-Regelsets relativ zum Erweiterungsverzeichnis. Siehe den Abschnitt <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules">Regeln</a> der <code>declarativeNetRequest</code>-API für Informationen über den Inhalt der Regelset-JSON-Datei.</td>
    </tr>
  </tbody>
</table>

## Beispiel

```json
"declarative_net_request" : {
  "rule_resources" : [{
    "id": "ruleset_1",
    "enabled": true,
    "path": "rules_1.json"
  }, {
    "id": "ruleset_2",
    "enabled": false,
    "path": "rules_2.json"
  }]
}
```

## Beispielerweiterungen

<!-- Idealerweise würden wir die WebExtExamples-Vorlage verwenden, aber Beispiele sind noch nicht nach Manifest-Schlüsseln kategorisiert - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
