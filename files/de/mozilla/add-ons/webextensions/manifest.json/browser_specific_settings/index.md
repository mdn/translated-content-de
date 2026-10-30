---
title: browser_specific_settings
slug: Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings
l10n:
  sourceCommit: 5ea16dbadbd11a2718f7ffba9dd02efe1b69c322
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
      <td>
        <ul>
          <li>In Firefox:
            <br/>
            Für neue Erweiterungen, die ab dem 3. November 2025 bei addons.mozilla.org eingereicht werden, müssen Angaben zu <a href="#data_collection_permissions"><code>browser_specific_settings.gecko.data_collection_permissions</code></a> bereitgestellt werden.
            <br/>
            Ansonsten gilt:
            <ul>
              <li>Manifest V3: Für die Signierung von Erweiterungen erforderlich, unabhängig davon, ob sie über addons.mozilla.org (AMO) oder selbst vertrieben werden, um eine Erweiterungs-ID anzugeben.</li>
              <li>Manifest V2: Nicht erforderlich, sofern keine Erweiterungs-ID angegeben werden muss. Es wird jedoch empfohlen, die ID festzulegen.</li>
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
    "data_collection_permissions": {
      "required": [
        "none"
      ]
    },
    "strict_min_version": "140.0"
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

### Eigenschaften für Firefox (Gecko)

Firefox speichert browserspezifische Einstellungen in diesen Eigenschaften:

- `gecko` für die Desktop-Version und (sofern aktiviert) die Android-Version von Firefox.
- `gecko_android` für die Android-Version von Firefox.

Der Unterschlüssel `gecko` unterstützt diese Eigenschaften:

- `data_collection_permissions`
  - : Die optionalen und erforderlichen Datentypen, die die Erweiterung erfasst und zur Speicherung und Verarbeitung außerhalb der Erweiterung überträgt. Sie werden durch folgende Eigenschaften dargestellt:
    - `required`
      - : Die Daten, deren Erfassung und Übertragung für den Betrieb der Erweiterung erforderlich sind. Muss den Wert `none` oder einen oder mehrere der folgenden Werte enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `websiteActivity` oder `websiteContent`.
    - `optional` {{optional_inline}}
      - : Die Daten, deren Bereitstellung Benutzer ausdrücklich zustimmen können. Kann einen oder mehrere der folgenden Werte enthalten: `authenticationInfo`, `bookmarksInfo`, `browsingActivity`, `financialAndPaymentInfo`, `healthInfo`, `locationInfo`, `personalCommunications`, `personallyIdentifyingInfo`, `searchTerms`, `technicalAndInteraction`, `websiteActivity` oder `websiteContent`.

    Weitere Informationen finden Sie im Extension-Workshop-Artikel [In Firefox integrierte Einwilligung zur Datenerfassung und -übertragung](https://extensionworkshop.com/documentation/develop/firefox-builtin-data-consent/).

- `id`
  - : Die Erweiterungs-ID. Für Manifest V2 optional (obwohl empfohlen wird, eine ID festzulegen) und für die Signierung von Manifest-V3-Erweiterungen erforderlich. Wenn Sie für eine Manifest-V2-Erweiterung keinen Wert angeben, weist AMO der Erweiterung bei der Signierung eine GUID zu. Für die Signierung von Manifest-V3-Erweiterungen müssen Sie selbst eine ID erstellen; AMO weist keine ID zu. Falls angegeben, muss diese Eigenschaft eine der folgenden Formen haben:
    - (empfohlen) Eine Zeichenfolge mit höchstens 80 Zeichen, die wie eine E-Mail-Adresse formatiert ist (`^[a-zA-Z0-9-._]*@[a-zA-Z0-9-._]+$`). Sie können zwar eine echte E-Mail-Adresse verwenden (bedenken Sie, dass dies Spam anziehen kann), aber jede korrekt formatierte Zeichenfolge ist zulässig. Zum Beispiel `great_app@developers.company`.
    - Eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) (`^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$`).

    Bei der erstmaligen Signierung einer Erweiterung prüft addons.mozilla.org (AMO), ob die ID eindeutig ist.

    Zum Beispiel:

    ```json
      "id": "extensionname@example.org"
    ```

    ```json
      "id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
    ```

    Weitere Informationen zum Festlegen von Erweiterungs-IDs finden Sie unter [Erweiterungen und die Add-on-ID](https://extensionworkshop.com/documentation/develop/extensions-and-the-add-on-id/).

- `strict_min_version`
  - : Die mindestens zu unterstützende Gecko-Version. Wenn die Firefox-Version, unter der die Erweiterung installiert oder ausgeführt wird, darunter liegt, wird die Erweiterung nicht installiert beziehungsweise nicht ausgeführt. Falls nicht angegeben, werden alle Versionen unterstützt, die älter als `strict_max_version` sind. „\*“ ist in diesem Feld nicht zulässig.
    > [!NOTE]
    > Die älteste unterstützte Version, die Updates empfangen kann, ist 115.0 (ESR) oder, wenn ESR-Versionen nicht berücksichtigt werden, 128.0. Grund dafür ist der Ablauf des Stammzertifikats in Firefox im März 2025. Ältere Firefox-Versionen erkennen daher Erweiterungssignaturen nicht. Weitere Informationen finden Sie unter [Firefox aktualisieren, um Probleme mit Add-ons durch den Ablauf des Stammzertifikats zu vermeiden](https://support.mozilla.org/en-US/kb/root-certificate-expiration).
- `strict_max_version`
  - : Die höchstens zu unterstützende Gecko-Version. Wenn die Firefox-Version, unter der die Erweiterung installiert oder ausgeführt wird, darüber liegt, wird die Erweiterung nicht installiert beziehungsweise nicht ausgeführt. Der Standardwert ist „\*“, wodurch die Prüfung auf eine Höchstversion deaktiviert wird.

    > [!CALLOUT]
    > Siehe die Liste der [gültigen Gecko-Versionen](https://addons.mozilla.org/api/v5/applications/firefox/).

- `update_url`
  - : Ein Link zu einem [Update-Manifest für Erweiterungen](https://extensionworkshop.com/documentation/manage/updating-your-extension/). Beachten Sie, dass der Link mit „https“ beginnen muss. Dieser Schlüssel dient dazu, Updates für Ihre Erweiterung selbst zu verwalten, also nicht über AMO.

Der Unterschlüssel `gecko_android` unterstützt diese Eigenschaften:

- `strict_min_version`
  - : Die mindestens zu unterstützende Gecko-Version unter Android. Wenn die Version von Firefox für Android, unter der die Erweiterung installiert oder ausgeführt wird, darunter liegt, wird die Erweiterung nicht installiert beziehungsweise nicht ausgeführt. Falls nicht angegeben, gilt standardmäßig die durch `gecko.strict_min_version` festgelegte Version. „\*“ ist in diesem Feld nicht zulässig.
- `strict_max_version`
  - : Die höchstens zu unterstützende Gecko-Version unter Android. Wenn die Firefox-Version, unter der die Erweiterung installiert oder ausgeführt wird, darüber liegt, wird die Erweiterung nicht installiert beziehungsweise nicht ausgeführt. Falls nicht angegeben, gilt standardmäßig die durch `gecko.strict_max_version` festgelegte Version.

Um Firefox für Android ohne Angabe eines Versionsbereichs zu unterstützen, muss der Unterschlüssel `gecko_android` ein leeres Objekt sein, also `"gecko_android": {}`. Andernfalls ist die Erweiterung nur für Firefox auf dem Desktop verfügbar.

#### Format der Erweiterungs-ID

Die Erweiterungs-ID muss eine der folgenden Formen haben:

- Eine [GUID](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- Eine wie eine E-Mail-Adresse formatierte Zeichenfolge: `extensionname@example.org`. Es wird jedoch empfohlen, das Format `@string` zu verwenden.

Das zweite Format lässt sich leichter erzeugen und bearbeiten. Beachten Sie, dass die Verwendung einer echten E-Mail-Adresse hier Spam anziehen kann.

Zum Beispiel:

```json
"id": "@extension-name.developer-name"
```

```json
"id": "{daf44bf7-a45e-4450-979c-91cf07434c3d}"
```

### Eigenschaften für Safari

Safari speichert seine browserspezifischen Einstellungen im Unterschlüssel `safari`, der diese Eigenschaften hat:

- `strict_min_version`
  - : Die mindestens zu unterstützende Safari-Version.
- `strict_max_version`
  - : Die höchstens zu unterstützende Safari-Version.

### Eigenschaften für Chrome

Chrome verwendet diesen Schlüssel nicht und ignoriert ihn, wenn er in der Datei `manifest.json` einer Erweiterung vorhanden ist.

## Beispiele

Ein Beispiel mit allen möglichen Schlüsseln. Beachten Sie, dass die meisten Erweiterungen `strict_max_version` und `update_url` weglassen.

```json
"browser_specific_settings": {
  "gecko": {
    "id": "@addon-example",
    "strict_min_version": "128.0",
    "strict_max_version": "159.*",
    "update_url": "https://example.com/updates.json"
  },
  "gecko_android": {
    "strict_min_version": "128.0",
    "strict_max_version": "159.*"
  },
  "safari": {
    "strict_min_version": "14",
    "strict_max_version": "26"
  }
}
```

## Browser-Kompatibilität

{{Compat}}
