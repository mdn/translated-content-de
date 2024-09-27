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
      <th scope="row">Obligatorisch</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifestversion</th>
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

Geben Sie statische Regelsätze zur Verwendung mit {{WebExtAPIRef("declarativeNetRequest")}} an. Siehe [statische Regelsatzlimits](/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#static_ruleset_limits) für Informationen zur Anzahl der Regelsätze, aktivierten Regelsätze und Regeln, die angegeben werden können.

Siehe <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#permissions">Berechtigungen</a> für weitere Informationen zu den Berechtigungsanforderungen.

> [!NOTE]
> Eine Regel, die nicht erkannte Eigenschaften enthält, wird geladen, wenn sie ansonsten gültig ist, das heißt, nicht erkannte Eigenschaften werden ignoriert. Vor Firefox 128 wurde eine Regel mit nicht erkannten Eigenschaften als ungültig angesehen und nicht geladen.

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
      <td>Eine nicht leere Zeichenfolge, die den Regelsatz eindeutig identifiziert. IDs, die mit '_' beginnen, sind für die interne Verwendung reserviert.</td>
    </tr>
    <tr>
      <td><code>"enabled"</code></td>
      <td><code>Boolean</code></td>
      <td>Gibt an, ob der Regelsatz standardmäßig aktiviert ist. Die Methode {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets")}} kann verwendet werden, um einen Regelsatz zur Laufzeit zu aktivieren oder zu deaktivieren.</td>
    </tr>
    <tr>
      <td><code>"path"</code></td>
      <td><code>String</code></td>
      <td>Der Pfad des JSON-Regelsatzes relativ zum Erweiterungsverzeichnis. Siehe den <a href="/de/docs/Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest#rules">Regeln</a>-Abschnitt der <code>declarativeNetRequest</code>-API für Informationen zum Inhalt der JSON-Regelsatzdatei.</td>
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

<!-- Ideally we'd use the WebExtExamples template, but examples are not categorized by manifest keys yet - https://github.com/mdn/webextensions-examples/issues/524 -->

- [dnr-block-only](https://github.com/mdn/webextensions-examples/tree/main/dnr-block-only)
- [dnr-redirect-url](https://github.com/mdn/webextensions-examples/tree/main/dnr-redirect-url)

## Browser-Kompatibilität

{{Compat}}
