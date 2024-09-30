---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: bd6b9a367a074e270f8c7a894d0338f5e6a56c45
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
        Normalerweise nein (siehe jedoch
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >Wann brauchen Sie eine Add-on-ID?</a
        >). Obligatorisch, wenn die Erweiterungs-ID nicht bestimmt werden kann, siehe
        <a href="#firefox_gecko_properties"
          ><code>browser_specific_settings.gecko.id</code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json;">
"browser_specific_settings": {
  "gecko": {
    "id": "addon@example.com",
    "strict_min_version": "42.0"
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

Firefox speichert browserspezifische Einstellungen in diesen Unterschlüsseln:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der `gecko` Unterschlüssel unterstützt diese Eigenschaften:

- `id`
  - : Die Erweiterungs-ID. Wenn angegeben, darf diese Eigenschaft maximal 80 Zeichen lang sein. Sehen Sie unter [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) nach, wann Sie die ID angeben sollten.
- `strict_min_version`
  - : Minimale Version von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen vor `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig ist "\*" eingestellt, was das Überprüfen einer maximalen Version deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient der Verwaltung von Erweiterungs-Updates durch Sie selbst (d.h. nicht über AMO).

Der `gecko_android` Unterschlüssel unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale Version von Gecko, die auf Android unterstützt wird. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, wird standardmäßig die durch `gecko.strict_min_version` bestimmte Version verwendet. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die auf Android unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird die durch `gecko.strict_max_version` bestimmte Version verwendet.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich anzugeben, muss der `gecko_android` Unterschlüssel ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls wird die Erweiterung nur in der Desktop-Version von Firefox verfügbar gemacht.

#### Erweiterungs-ID-Format

Die Erweiterungs-ID muss eine der folgenden sein:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Eine Zeichenkette, die wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`

Das letztere Format ist einfacher zu generieren und zu bearbeiten. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier zu Spam führen könnte.

Zum Beispiel:

```json
"id": "extensionname@example.org"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im `safari` Unterschlüssel, der diese Eigenschaften hat:

- `strict_min_version`
  - : Minimale Version von Safari, die unterstützt wird.
- `strict_max_version`
  - : Maximale Version von Safari, die unterstützt wird.

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
