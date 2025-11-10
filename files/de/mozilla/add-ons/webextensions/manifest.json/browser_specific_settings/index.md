---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Obligatorisch</th>
      <td>
        Muss mit den für <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> spezifizierten Details für neue Erweiterungen bereitgestellt werden, die ab dem 3. November 2025 an addons.mozilla.org übermittelt werden.
        <br/>
        Ansonsten in der Regel nicht erforderlich (aber siehe auch
        <a
          href="https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/#when-do-you-need-an-add-on-id"
          >Wann benötigen Sie eine Add-on-ID?</a
        >). Verpflichtend, wenn die Erweiterungs-ID nicht bestimmt werden kann, siehe
        <a href="#id"
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

Der Schlüssel `browser_specific_settings` enthält Schlüssel, die spezifisch für eine bestimmte Host-Anwendung sind.

### Firefox (Gecko)-Eigenschaften

Firefox speichert browserspezifische Einstellungen in diesen Unter-Schlüsseln:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der Unter-Schlüssel `gecko` unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung sammelt und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Diese werden durch die Eigenschaften dargestellt:
    - `required`
      - : Die Daten, die zur Erhebung und Übertragung für den Betrieb der Erweiterung erforderlich sind. Muss den Wert `none` oder eine oder mehrere der folgenden Optionen enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity` oder `websiteContent`.
    - `optional` {{optional_inline}}
      - : Die Daten, die der Benutzer bereitstellen kann. Kann einen oder mehrere der folgenden Werte enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity` oder `websiteContent`.

    Weitere Informationen finden Sie im Extension Workshop-Artikel [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Wenn angegeben, darf diese Eigenschaft maximal 80 Zeichen enthalten. Siehe [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/), um zu bestimmen, wann die ID angegeben werden sollte.
- `strict_min_version`
  - : Mindestversion von Gecko zur Unterstützung. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen älter als `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht zulässig.
- `strict_max_version`
  - : Höchstversion von Gecko zur Unterstützung. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig ist "\*", was die Überprüfung auf eine Höchstversion deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient der Verwaltung der Erweiterungsupdates durch Sie selbst (d.h. nicht über AMO).

Der Unter-Schlüssel `gecko_android` unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Mindestversion von Gecko zur Unterstützung auf Android. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, wird die durch `gecko.strict_min_version` bestimmte Version verwendet. "\*" ist in diesem Feld nicht zulässig.
- `strict_max_version`
  - : Höchstversion von Gecko zur Unterstützung auf Android. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird die durch `gecko.strict_max_version` bestimmte Version verwendet.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android ohne Angabe eines Versionsbereichs zu unterstützen, muss der Unter-Schlüssel `gecko_android` ein leeres Objekt sein, also `"gecko_android": {}`. Andernfalls wird die Erweiterung nur auf dem Desktop Firefox verfügbar gemacht.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eine der folgenden sein:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Eine Zeichenkette, die wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`. Es wird jedoch empfohlen, ein `@string`-Format zu verwenden.

Das letztere Format ist leichter zu generieren und zu manipulieren. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier möglicherweise zu Spam führen kann.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im Unter-Schlüssel `safari`, der diese Eigenschaften hat:

- `strict_min_version`
  - : Mindestversion von Safari zur Unterstützung.
- `strict_max_version`
  - : Höchstversion von Safari zur Unterstützung.

### Chrome-Eigenschaften

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, wenn er in der Datei `manifest.json` einer Erweiterung vorhanden ist.

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
