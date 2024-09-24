---
title: deklarative_net_request
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
      <th scope="row">Pflicht</th>
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

Geben Sie statische Regelsets für die Verwendung mit {{WebExtAPIRef("declarativeNetRequest")}} an. Siehe [Statische Regelsatzlimits](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits) für Informationen zur Anzahl der Regelsets, aktivierten Regelsets und Regeln, die angegeben werden können.

Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions">Berechtigungen</a> für weitere Informationen zu Berechtigungserfordernissen.

> [!NOTE]
> Eine Regel mit nicht erkannten Eigenschaften wird geladen, wenn sie ansonsten gültig ist, das heißt, nicht erkannte Eigenschaften werden ignoriert. Vor Firefox 128 wurde eine Regel mit nicht erkannten Eigenschaften als ungültig angesehen und nicht geladen.

## Syntax

Der Schlüssel `"declarative_net_request"` ist ein Objekt, das die Eigenschaft `"rule_resources"` enthalten muss, ein Array, das mindestens ein Objekt mit diesen Eigenschaften enthalten muss:

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
      <td>Ein nicht leerer String, der das Regelset eindeutig identifiziert. IDs, die mit '_' beginnen, sind für den internen Gebrauch reserviert.</td>
    </tr>
    <tr>
      <td><code>"enabled"</code></td>
      <td><code>Boolean</code></td>
      <td>Ob das Regelset standardmäßig aktiviert ist. Die Methode {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} kann verwendet werden, um ein Regelset zur Laufzeit zu aktivieren oder zu deaktivieren.</td>
    </tr>
    <tr>
      <td><code>"path"</code></td>
      <td><code>String</code></td>
      <td>Der Pfad des JSON-Regelsets relativ zum Erweiterungsverzeichnis. Siehe den <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules">Regeln</a>-Abschnitt der <code>declarativeNetRequest</code>-API für Informationen zum Inhalt der JSON-Datei des Regelsets.</td>
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

## Beispiel-Erweiterungen

<!-- Ideally we'd use the WebExtExamples template, but examples are not categorized by manifest keys yet - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
