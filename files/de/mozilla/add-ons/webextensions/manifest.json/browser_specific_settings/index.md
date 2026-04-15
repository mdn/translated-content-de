---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 4b57695bd1e362933d9328d5222e0861dc3e7912
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
            Muss bereitgestellt werden mit den Details, die für <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> für neue Erweiterungen, die ab dem 3. November 2025 bei addons.mozilla.org eingereicht werden, spezifiziert sind.
            <br/>
            Andernfalls:
            <ul>
              <li>Manifest V3: Verpflichtend für das Signieren von Erweiterungen, d.h. Verteilung über addons.mozilla.org (AMO) oder Selbstverteilung, um eine Erweiterungs-ID bereitzustellen.</li>
              <li>Manifest V2: Nicht erforderlich, es sei denn, eine Erweiterungs-ID muss angegeben werden. Es wird jedoch empfohlen, eine ID zu setzen.</li>
            </ul>
            Siehe <a href="#id"><code>browser_specific_settings.gecko.id</code></a> für weitere Informationen.</li>
          <li>In Safari, nicht erforderlich.</li>
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
    "data_collection_permissions": {
      "required": [
        "none"
      ]
    },
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

Firefox speichert browser-spezifische Einstellungen in diesen Eigenschaften:

- `gecko` für die Desktop- und (wenn aktiviert) Android-Versionen von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der Unter-Schlüssel `gecko` unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung sammelt und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Diese werden durch die Eigenschaften dargestellt:
    - `required`
      - : Die Daten, deren Sammlung und Übertragung die Erweiterung für ihren Betrieb erfordert. Muss den Wert `none` oder eines oder mehrere von `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity` oder `websiteContent` enthalten.
    - `optional` {{optional_inline}}
      - : Die Daten, die der Benutzer bereitstellen kann. Kann eines oder mehrere von `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity` oder `websiteContent` enthalten.

    Für weitere Informationen siehe den Artikel der Extension Workshop [Firefox integrierte Zustimmung zur Datenerfassung und -übertragung](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Optional für Manifest V2 (obwohl das Festlegen einer ID empfohlen wird) und erforderlich für das Signieren von Manifest V3-Erweiterungen. Wenn Sie keinen Wert für Manifest V2-Erweiterungen angeben, weist AMO der Erweiterung eine GUID zu, wenn sie signiert wird. Sie müssen eine ID zum Signieren von Manifest V3-Erweiterungen erstellen; AMO weist keine ID zu. Wenn angegeben, muss diese Eigenschaft ein:
    - (empfohlen) String sein, der maximal 80 Zeichen enthält und wie eine E-Mail-Adresse formatiert ist (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). Während Sie eine echte E-Mail-Adresse verwenden können (denken Sie daran, dass dies Spam anziehen könnte), kann jeder korrekt formatierte String verwendet werden. Zum Beispiel `great_app@developers.company`.
    - [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`)

    Bei der erstmaligen Signierung von Erweiterungen prüft addons.mozilla.org (AMO), dass die ID eindeutig ist.

    Zum Beispiel:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    Weitere Informationen zum Festlegen von Erweiterungs-IDs finden Sie unter [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/).

- `strict_min_version`
  - : Minimale unterstützte Version von Gecko. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Wenn nicht angegeben, werden alle Versionen vor `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht zulässig.
- `strict_max_version`
  - : Maximale unterstützte Version von Gecko. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Standardmäßig "\*", wodurch die Überprüfung auf eine maximale Version deaktiviert ist.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit „https“ beginnen muss. Dieser Schlüssel dient zur selbständigen Verwaltung von Erweiterungsupdates (d.h. nicht über AMO).

Der Unter-Schlüssel `gecko_android` unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale unterstützte Version von Gecko auf Android. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Wenn nicht angegeben, wird standardmäßig die von `gecko.strict_min_version` bestimmte Version verwendet. "\*" ist in diesem Feld nicht zulässig.
- `strict_max_version`
  - : Maximale unterstützte Version von Gecko auf Android. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Standardmäßig wird die von `gecko.strict_max_version` bestimmte Version verwendet.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich festzulegen, muss der Unter-Schlüssel `gecko_android` ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls ist die Erweiterung nur auf dem Desktop-Firefox verfügbar.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eines der folgenden sein:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Ein String, der wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`. Die Verwendung eines `@string`-Formats wird jedoch empfohlen.

Das letztere Format ist einfacher zu erstellen und zu handhaben. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier Spam anziehen könnte.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari-Eigenschaften

Safari speichert seine browser-spezifischen Einstellungen im Unter-Schlüssel `safari`, welcher diese Eigenschaften hat:

- `strict_min_version`
  - : Minimale unterstützte Version von Safari.
- `strict_max_version`
  - : Maximale unterstützte Version von Safari.

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
