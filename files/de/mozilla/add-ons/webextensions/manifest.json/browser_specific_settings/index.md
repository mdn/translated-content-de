---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
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
      <td>
        Normalerweise nein (aber siehe auch
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >Wann benötigen Sie eine Add-on-ID?</a
        >). Erforderlich, wenn die Erweiterungs-ID nicht bestimmt werden kann, siehe
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

### Firefox (Gecko) Eigenschaften

Firefox speichert browser-spezifische Einstellungen in diesen Unter-Schlüsseln:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der Unter-Schlüssel `gecko` unterstützt diese Eigenschaften:

- `id`
  - : Die Erweiterungs-ID. Diese Eigenschaft muss, wenn sie angegeben ist, maximal 80 Zeichen lang sein. Siehe [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/), um zu bestimmen, wann die ID anzugeben ist.
- `strict_min_version`
  - : Minimale Version von Gecko, die unterstützt wird. Ist die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, niedriger, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen früher als `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die unterstützt wird. Ist die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, höher, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig ist "\*", was das Überprüfen auf eine maximale Version deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel ist für die selbstständige Verwaltung von Erweiterungs-Updates vorgesehen (d.h. nicht über AMO).

Der Unter-Schlüssel `gecko_android` unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale Version von Gecko, die auf Android unterstützt wird. Ist die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, niedriger, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, wird die Version durch `gecko.strict_min_version` bestimmt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die auf Android unterstützt wird. Ist die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, höher, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird die Version durch `gecko.strict_max_version` bestimmt.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android ohne Angabe eines Versionsbereichs zu unterstützen, muss der Unter-Schlüssel `gecko_android` ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls wird die Erweiterung nur auf dem Desktop-Firefox verfügbar gemacht.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eines der folgenden Formate haben:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Eine Zeichenkette, die wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`

Das letztgenannte Format ist einfacher zu generieren und zu verwenden. Beachten Sie, dass die Verwendung einer realen E-Mail-Adresse hier Spam anziehen könnte.

Zum Beispiel:

```json
"id": "extensionname@example.org"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browser-spezifischen Einstellungen im Unter-Schlüssel `safari`, der folgende Eigenschaften hat:

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
