---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 673a473ab4b40c5f6787b2d3438370269fff31c7
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>
        In der Regel nein (siehe auch
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >Wann benötigen Sie eine Add-on-ID?</a
        >). Verpflichtend, wenn die Erweiterungs-ID nicht ermittelt werden kann, siehe
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
    "id": "@addon-example",
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

Der Schlüssel `browser_specific_settings` enthält Schlüssel, die für eine bestimmte Host-Anwendung spezifisch sind.

### Firefox (Gecko) Eigenschaften

Firefox speichert browserspezifische Einstellungen in diesen Unter-Schlüsseln:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der `gecko` Unter-Schlüssel unterstützt diese Eigenschaften:

- `id`
  - : Die Erweiterungs-ID. Wenn angegeben, darf diese Eigenschaft maximal 80 Zeichen enthalten. Siehe [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/), um zu bestimmen, wann die ID angegeben werden muss.
- `strict_min_version`
  - : Mindestversion von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen vor `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Höchstversion von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig "\*", was die Überprüfung auf eine Höchstversion deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungsaktualisierungsmanifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel ist für die Verwaltung von Erweiterungsaktualisierungen durch Sie selbst gedacht (d.h. nicht über AMO).

Der `gecko_android` Unter-Schlüssel unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Mindestversion von Gecko, die auf Android unterstützt wird. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, ist die Standardversion die durch `gecko.strict_min_version` bestimmte Version. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Höchstversion von Gecko, die auf Android unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardversion ist die durch `gecko.strict_max_version` bestimmte Version.

Sehen Sie sich die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/) an.

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich anzugeben, muss der `gecko_android` Unter-Schlüssel ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls wird die Erweiterung nur auf dem Desktop-Firefox verfügbar gemacht.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eines der folgenden sein:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Ein String, der wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org` Allerdings wird die Verwendung eines `@string` Formats empfohlen.

Das letztere Format ist einfacher zu erstellen und zu bearbeiten. Beachten Sie, dass die Verwendung einer realen E-Mail-Adresse hier Spam anziehen könnte.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im `safari` Unter-Schlüssel, der diese Eigenschaften hat:

- `strict_min_version`
  - : Mindestversion von Safari, die unterstützt wird.
- `strict_max_version`
  - : Höchstversion von Safari, die unterstützt wird.

### Chrome Eigenschaften

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, wenn er in der `manifest.json` Datei einer Erweiterung vorhanden ist.

## Beispiele

Beispiel mit allen möglichen Schlüsseln. Beachten Sie, dass die meisten Erweiterungen `strict_max_version` und `update_url` weglassen.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "@addon-example",
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
