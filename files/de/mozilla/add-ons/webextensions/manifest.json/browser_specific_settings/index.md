---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: c27b843b70ca03c9dc2f46805cae2c0017d8bce6
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
      <td>
        <ul>
          <li>In Firefox:
            <br/>
            Muss bereitgestellt werden mit Details, die für <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> für neue Erweiterungen angegeben sind, die ab dem 3. November 2025 bei addons.mozilla.org eingereicht werden.
            <br/>
            Ansonsten:
            <ul>
              <li>Manifest V3: Erforderlich für das Signieren von Erweiterungen, d.h. die Verteilung über addons.mozilla.org (AMO) oder Selbstverteilung, um eine Erweiterungs-ID bereitzustellen.</li>
              <li>Manifest V2: Nicht erforderlich, es sei denn, es muss eine Erweiterungs-ID angegeben werden. Es wird jedoch empfohlen, die ID festzulegen.</li>
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

Firefox speichert browserspezifische Einstellungen in diesen Eigenschaften:

- `gecko` für die Desktop- und (wenn aktiviert) Android-Versionen von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der Unter-Schlüssel `gecko` unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung sammelt und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Diese werden durch die Eigenschaften dargestellt:
    - `required`
      - : Die Daten, deren Sammlung und Übertragung für den Betrieb der Erweiterung erforderlich sind. Muss den Wert `none` oder einen oder mehrere der folgenden enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity` oder `websiteContent`.
    - `optional` {{optional_inline}}
      - : Die Daten, die der Benutzer optional bereitstellen kann. Kann einen oder mehrere der folgenden Inhalte umfassen: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity` oder `websiteContent`.

    Weitere Informationen finden Sie im Artikel [Firefox integrierte Einwilligung zur Datenerfassung und -übertragung](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Optional für Manifest V2 (obwohl es empfohlen wird, eine ID festzulegen) und erforderlich für das Signieren von Manifest V3-Erweiterungen. Wenn Sie für Manifest V2-Erweiterungen keinen Wert angeben, weist AMO der Erweiterung eine GUID zu, wenn sie signiert wird. Sie müssen eine ID für das Signieren von Manifest V3-Erweiterungen erstellen; AMO weist keine ID zu. Wenn angegeben, muss diese Eigenschaft eine sein:
    - (empfohlen) Zeichenkette mit bis zu 80 Zeichen, die wie eine E-Mail-Adresse formatiert ist. (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). Sie können zwar eine echte E-Mail-Adresse verwenden (achten Sie darauf, dass dies Spam anziehen könnte), jedoch kann jede korrekt formatierte Zeichenkette verwendet werden. Zum Beispiel `great_app@developers.company`.
    - [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`)

    Beim ersten Signieren von Erweiterungen überprüft addons.mozilla.org (AMO), dass die ID einzigartig ist.

    Zum Beispiel:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    Weitere Informationen zum Festlegen von Erweiterungs-IDs finden Sie unter [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/).

- `strict_min_version`
  - : Mindestversion von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, werden alle Versionen früher als `strict_max_version` unterstützt. "\*" ist in diesem Feld nicht gültig.
    > [!NOTE]
    > Die minimal unterstützte Version, die Updates empfangen kann, ist 115.0 (ESR) oder, wenn ESR-Versionen nicht enthalten sind, 128.0. Dies liegt an der Ablauf der Root-Zertifizierung in Firefox im März 2025. Daher erkennen ältere Versionen von Firefox keine Erweiterungssignaturen. Weitere Informationen finden Sie unter [Aktualisieren Sie Firefox, um Add-on-Probleme durch Ablauf des Root-Zertifikats zu verhindern](https://support.mozilla.org/en-US/kb/root-certificate-expiration).
- `strict_max_version`
  - : Maximale unterstützte Version von Gecko. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird "\*" verwendet, was die Überprüfung einer maximalen Version deaktiviert.

    > [!CALLOUT]
    > Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

- `update_url`
  - : Ein Link zu einem [Manifest für Erweiterungs-Updates](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient zur selbstständigen Verwaltung von Erweiterungs-Updates (d.h. nicht über AMO).

Der Unter-Schlüssel `gecko_android` unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Mindestversion von Gecko für die Unterstützung auf Android. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Wenn nicht angegeben, wird standardmäßig die durch `gecko.strict_min_version` bestimmte Version verwendet. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko für die Unterstützung auf Android. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder ausgeführt. Standardmäßig wird die durch `gecko.strict_max_version` bestimmte Version verwendet.

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich anzugeben, muss der Unter-Schlüssel `gecko_android` ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls ist die Erweiterung nur auf dem Firefox-Desktop verfügbar.

#### Erweiterungs-ID-Format

Die Erweiterungs-ID muss eine der folgenden sein:

- [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Eine Zeichenkette, die wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`. Die Verwendung eines `@string`-Formats wird jedoch empfohlen.

Das letztere Format ist einfacher zu erzeugen und zu handhaben. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier Spam anziehen könnte.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im Unter-Schlüssel `safari`, der diese Eigenschaften hat:

- `strict_min_version`
  - : Mindestversion von Safari, die unterstützt wird.
- `strict_max_version`
  - : Maximale Version von Safari, die unterstützt wird.

### Chrome-Eigenschaften

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, wenn er in der `manifest.json`-Datei einer Erweiterung vorhanden ist.

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
