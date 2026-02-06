---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: aa2535b8d83223b53fe57bb0c3daaf1c6851d781
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Objekt</code></td>
    </tr>
    <tr>
      <th scope="row">Pflichtfeld</th>
      <td>
        <ul>
          <li>In Firefox:
            <br/>
            Muss mit den für <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> angegebenen Details für neue Erweiterungen bereitgestellt werden, die ab dem 3. November 2025 bei addons.mozilla.org eingereicht werden.
            <br/>
            Andernfalls:
            <ul>
              <li>Manifest V3: Erforderlich für die Signierung von Erweiterungen, d.h. die Verteilung über addons.mozilla.org (AMO) oder die Selbstverteilung, um eine Erweiterungs-ID bereitzustellen.</li>
              <li>Manifest V2: Nicht erforderlich, es sei denn, eine Erweiterungs-ID muss angegeben werden. Es wird jedoch empfohlen, die ID festzulegen.</li>
            </ul>
            Weitere Informationen finden Sie unter <a href="#id"><code>browser_specific_settings.gecko.id</code></a>.</li>
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

Der Schlüssel `browser_specific_settings` enthält Schlüssel, die spezifisch für eine bestimmte Host-Anwendung sind.

### Firefox (Gecko) Eigenschaften

Firefox speichert browserspezifische Einstellungen in diesen Eigenschaften:

- `gecko` für die Desktop- und (wenn aktiviert) Android-Versionen von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der `gecko` Unter-Schlüssel unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung sammelt und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Diese werden durch die folgenden Eigenschaften dargestellt:
    - `required`
      - : Die Daten, die die Erweiterung zum Sammeln und Übertragen für ihren Betrieb benötigt. Muss den Wert `none` oder einen oder mehrere der folgenden Werte enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity`, oder `websiteContent`.
    - `optional` {{optional_inline}}
      - : Die Daten, die der Benutzer zur Verfügung stellen kann. Kann einen oder mehrere der folgenden Werte enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity`, oder `websiteContent`.

    Weitere Informationen finden Sie im Extension Workshop-Artikel [Firefox built-in consent for data collection and transmission](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Optional für Manifest V2 (obwohl das Festlegen einer ID empfohlen wird) und erforderlich für das Signieren von Manifest V3-Erweiterungen. Wenn Sie für Manifest V2-Erweiterungen keinen Wert angeben, weist AMO der Erweiterung beim Signieren eine GUID zu. Sie müssen eine ID für das Signieren von Manifest V3-Erweiterungen erstellen; AMO weist keine ID zu. Wenn angegeben, muss diese Eigenschaft sein:
    - (empfohlen) eine Zeichenkette mit 80 oder weniger Zeichen im E-Mail-Adresse-Format. (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). Während Sie eine echte E-Mail-Adresse verwenden können (denken Sie daran, dass dies Spam anziehen kann), kann jede korrekt formatierte Zeichenkette verwendet werden. Zum Beispiel, `great_app@developers.company`.
    - [GUID](https://de.wikipedia.org/wiki/Universally_unique_identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`)

    Beim erstmaligen Signieren von Erweiterungen überprüft addons.mozilla.org (AMO), ob die ID eindeutig ist.

    Zum Beispiel:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    Weitere Informationen über das Festlegen von Erweiterungs-IDs finden Sie unter [Extensions and the Add-on ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/).

- `strict_min_version`
  - : Minimale Version von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Wenn nicht angegeben, werden alle Versionen, die älter als `strict_max_version` sind, unterstützt. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko, die unterstützt wird. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Standardmäßig wird "\*" verwendet, was die Überprüfung einer maximalen Version deaktiviert.
- `update_url`
  - : Ein Link zu einem [Erweiterungs-Update-Manifest](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit "https" beginnen muss. Dieser Schlüssel dient dazu, selbst Erweiterungsupdates zu verwalten (d.h. nicht über AMO).

Der `gecko_android` Unter-Schlüssel unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Minimale Version von Gecko zur Unterstützung auf Android. Wenn die Firefox für Android-Version, auf der die Erweiterung installiert oder ausgeführt wird, unter dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Wenn nicht angegeben, wird standardmäßig die durch `gecko.strict_min_version` bestimmte Version verwendet. "\*" ist in diesem Feld nicht gültig.
- `strict_max_version`
  - : Maximale Version von Gecko zur Unterstützung auf Android. Wenn die Firefox-Version, auf der die Erweiterung installiert oder ausgeführt wird, über dieser Version liegt, wird die Erweiterung nicht installiert oder nicht ausgeführt. Standardmäßig wird die durch `gecko.strict_max_version` bestimmte Version verwendet.

Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

Um Firefox für Android zu unterstützen, ohne einen Versionsbereich anzugeben, muss der Unter-Schlüssel `gecko_android` ein leeres Objekt sein, d.h. `"gecko_android": {}`. Andernfalls wird die Erweiterung nur auf dem Desktop-Firefox verfügbar gemacht.

#### Erweiterungs-ID-Format

Die Erweiterungs-ID muss eine der folgenden sein:

- [GUID](https://de.wikipedia.org/wiki/Universally_unique_identifier)
- Eine Zeichenkette, die wie eine E-Mail-Adresse formatiert ist: `extensionname@example.org`. Die Verwendung des `@string` Formats wird jedoch empfohlen.

Das letztere Format ist einfacher zu erzeugen und zu verwalten. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier möglicherweise Spam anziehen kann.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Safari Eigenschaften

Safari speichert seine browserspezifischen Einstellungen im `safari` Unter-Schlüssel, der folgende Eigenschaften hat:

- `strict_min_version`
  - : Minimale Version von Safari, die unterstützt wird.
- `strict_max_version`
  - : Maximale Version von Safari, die unterstützt wird.

### Chrome Eigenschaften

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, wenn er in der `manifest.json` Datei einer Erweiterung vorhanden ist.

## Beispiele

Beispiel mit allen möglichen Schlüsseln. Beachten Sie, dass die meisten Erweiterungen `strict_max_version` und `update_url` auslassen.

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
