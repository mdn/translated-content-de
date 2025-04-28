---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
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
      <td>
        Normalerweise nein (siehe aber auch
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >Wann benötigen Sie eine Add-on-ID?</a
        >). Obligatorisch, wenn die Erweiterungs-ID nicht bestimmt werden kann, siehe
        <a href="#firefox_gecko_properties"
          ><code>browser_specific_settings.gecko.id</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "58.0"
  }
}
</pre
        >
      </td>
    </tr>
  </tbody>
</table>

## Beschreibung

Der Schlüssel `browser_specific_settings` enthält Schlüssel, die spezifisch für eine bestimmte Host-Anwendung sind.

### Firefox (Gecko)-Eigenschaften

Firefox speichert browserspezifische Einstellungen in diesen Unter-Schlüsseln:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der `gecko` Unter-Schlüssel unterstützt diese Eigenschaften:

- `id`
  - : Die Erweiterungs-ID. Wenn angegeben, muss dieses Attribut maximal 80 Zeichen enthalten. Siehe [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/), um zu bestimmen, wann die ID anzugeben ist.
- `strict_min_version`
  - : Minimale Version von Gecko, die unterstützt werden soll. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wird sie nicht angegeben, werden alle Versionen früher als `strict_max_version` unterstützt. "\*" ist in diesem Feld ungültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die unterstützt werden soll. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig ist "\*" gesetzt, was das Überprüfen einer maximalen Version deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient dazu, Erweiterungs-Updates selbst zu verwalten (d.h. nicht über AMO).

Der `gecko_android` Unter-Schlüssel unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale Version von Gecko, die auf Android unterstützt werden soll. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wird sie nicht angegeben, wird die Version verwendet, die durch `gecko.strict_min_version` bestimmt wird. "\*" ist in diesem Feld ungültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die auf Android unterstützt werden soll. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird die Version verwendet, die durch `gecko.strict_max_version` bestimmt wird.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich zu spezifizieren, muss der `gecko_android` Unter-Schlüssel ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls steht die Erweiterung nur auf dem Desktop-Firefox zur Verfügung.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eines der folgenden Formate haben:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Ein String im Format einer E-Mail-Adresse: `extensionname@example.org`

Das letztere Format ist leichter zu erzeugen und zu verwalten. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier Spam anziehen kann.

Zum Beispiel:

```json
"id": "extensionname@example.org"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im `safari` Unter-Schlüssel, der diese Eigenschaften hat:

- `strict_min_version`
  - : Minimale Version von Safari, die unterstützt werden soll.
- `strict_max_version`
  - : Maximale Version von Safari, die unterstützt werden soll.

## Beispiele

Beispiel mit allen möglichen Schlüsseln. Beachten Sie, dass die meisten Erweiterungen `strict_max_version` und `update_url` weglassen.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0",
    "strict_max_version": "50.*",
    "update_url": "https://example.com/updates.json"
  },
  "safari": {
    "strict_min_version": "14",
    "strict_max_version": "20"
  }
}
```

## Browser-Kompatibilität

{{Compat}}
