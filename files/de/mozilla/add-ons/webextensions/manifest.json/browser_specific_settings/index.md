---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 6c8f4adc0de769e890aa3b9b7a6873cf2ee91267
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
        <ul>
          <li>In Firefox:
            <br/>
            Muss mit den angegebenen Details für <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> für neue Erweiterungen bereitgestellt werden, die ab dem 3. November 2025 bei addons.mozilla.org eingereicht werden.
            <br/>
            Ansonsten:
            <ul>
              <li>Manifest V3: Verpflichtend für die Signierung von Erweiterungen, d.h. Verteilung über addons.mozilla.org (AMO) oder Selbstverteilung, um eine Erweiterungs-ID bereitzustellen.</li>
              <li>Manifest V2: Nicht erforderlich, es sei denn, es muss eine Erweiterungs-ID angegeben werden. Es wird jedoch empfohlen, die ID anzugeben.</li>
            </ul>
            Siehe <a href="#id"><code>browser_specific_settings.gecko.id</code></a> für weitere Informationen.</li>
          <li>In Safari nicht erforderlich.</li>
        </ul>
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

Firefox speichert browserspezifische Einstellungen in diesen Eigenschaften:

- `gecko` für die Desktop-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der `gecko`-Unter-Schlüssel unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung sammelt und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Diese werden durch die Eigenschaften dargestellt:
    - `required`
      - : Die Daten, deren Sammlung und Übertragung die Erweiterung für den Betrieb erfordert. Muss den Wert `none` enthalten oder einen oder mehrere der folgenden: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity` oder `websiteContent`.
    - `optional` {{optional_inline}}
      - : Die Daten, die der Nutzer bereitstellen kann. Kann einen oder mehrere der folgenden enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity` oder `websiteContent`.

    Weitere Informationen finden Sie im Artikel des Extension Workshop [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Optional für Manifest V2 (obwohl das Setzen einer ID empfohlen wird) und erforderlich für die Signierung von Manifest V3-Erweiterungen. Wenn Sie für Manifest V2-Erweiterungen keinen Wert angeben, weist AMO der Erweiterung beim Signieren eine GUID zu. Sie müssen eine ID für die Signierung von Manifest V3-Erweiterungen erstellen; AMO weist keine ID zu. Wenn angegeben, muss diese Eigenschaft sein:
    - (empfohlen) ein String mit 80 oder weniger Zeichen, formatiert wie eine E-Mail-Adresse. (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). Während Sie eine echte E-Mail-Adresse verwenden können (wobei zu beachten ist, dass dies Spam anziehen kann), kann jeder korrekt formatierte String verwendet werden. Zum Beispiel, `great_app@developers.company`.
    - [GUID](https://de.wikipedia.org/wiki/Globally_Unique_Identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`)

    Bei erstmaliger Signierung von Erweiterungen prüft addons.mozilla.org (AMO), dass die ID einzigartig ist.

    Zum Beispiel:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    Siehe [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/) für weitere Informationen über die Festlegung von Erweiterungs-IDs.

- `strict_min_version`
  - : Minimale unterstützte Version von Gecko. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen vor `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale unterstützte Version von Gecko. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Voreinstellung ist "\*", was die Überprüfung einer maximalen Version deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient dazu, die Updates der Erweiterung selbst zu verwalten (d.h. nicht über AMO).

Der `gecko_android`-Unter-Schlüssel unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale unterstützte Version von Gecko auf Android. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, gilt standardmäßig die Version, die durch `gecko.strict_min_version` bestimmt wird. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale unterstützte Version von Gecko auf Android. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Voreinstellung ist die Version, die durch `gecko.strict_max_version` bestimmt wird.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android ohne Angabe eines Versionsbereichs zu unterstützen, muss der `gecko_android`-Unter-Schlüssel ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls steht die Erweiterung nur auf dem Desktop-Firefox zur Verfügung.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eine der folgenden sein:

- [GUID](https://de.wikipedia.org/wiki/Globally_Unique_Identifier)
- Ein String, formatiert wie eine E-Mail-Adresse: `extensionname@example.org`. Allerdings wird die Verwendung eines `@string`-Formats empfohlen.

Das letztere Format ist einfacher zu erzeugen und zu handhaben. Beachten Sie, dass die Verwendung einer realen E-Mail-Adresse hier Spam anziehen kann.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im `safari`-Unter-Schlüssel, der diese Eigenschaften hat:

- `strict_min_version`
  - : Minimale unterstützte Version von Safari.
- `strict_max_version`
  - : Maximale unterstützte Version von Safari.

### Chrome-Eigenschaften

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, falls er in der `manifest.json`-Datei einer Erweiterung vorhanden ist.

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
