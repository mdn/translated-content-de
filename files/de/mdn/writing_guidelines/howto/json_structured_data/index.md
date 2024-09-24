---
title: So verwenden Sie strukturierte Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

MDN speichert Daten, wann immer möglich, in gut definierten Strukturen. Diese Informationen werden dann zentralisiert und können einmal aktualisiert werden, während sie an zahlreichen Stellen verwendet werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt deren Zweck, Struktur und Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist einigermaßen unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Der Satz von APIs, der unter einem Namen zusammengefasst ist, ist eine Konvention zur Kommunikation über ein Feature, ohne technische Durchsetzung.

MDN benötigt jedoch diese Informationen, um kohärente Web-API-Seitenleisten zu erstellen (wie mit dem `\{{APIRef}}` Makro) mit den richtigen Referenzseiten, Anleitungen und Übersichtsartikeln.

GroupData tut genau das: Für jede API listet es die Schnittstellen, Eigenschaften, Methoden, Anleitungen und Übersichtsseiten auf. In der Vergangenheit listete es auch Wörterbücher und Rückrufe auf. Diese Verwendung wird jedoch nicht mehr empfohlen und wird in Zukunft entfernt.

### Struktur von GroupData

> [!WARNING]
> Nicht vorhandene Seiten, die in dieser Datei aufgeführt sind, werden ignoriert (in en-US).

Ein Eintrag in `GroupData.json` hat die folgende Struktur:

```json
"Name_of_the_API": {
  "overview": ["name_of_the_overview_page"],
  "guides": [
    "name_of_guide_1",
    (…)
  ],
  "interfaces": [
    "name_of_interface_1",
    (…)
  ],
  "methods": [
    "name_of_additional_method_1",
    (…)
  ],
  "properties": [
    "name_of_additional_property_1",
    (…)
  ],
  "events": [
    "name_of_additional_property_1",
    (…)
  ]
}
```

…wo:

- `"Name_of_the_API"`
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleistenmakros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird als auch der Name, der in der Seitenleiste selbst angezeigt wird. Wählen Sie ihn mit Bedacht.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den Text `"Name_of_the_API"` verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Anleitungen, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden sollen. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgeführten Schnittstellen **dürfen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften auf anderen Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR API dem `navigator` Objekt hinzufügt).
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgeführten Schnittstellen **dürfen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind der _Titel der Seiten_ (die unter `Web/Events` abgelegt sein müssen).
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` aufgeführten Schnittstellen abzielen, **dürfen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach dem gleichen Prinzip funktionieren. Da wir diese Entitäten nicht mehr auf ihren eigenen Seiten dokumentieren, wird ihre Verwendung nicht mehr empfohlen, und es sollten keine neuen Einträge hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Auch ist keiner der Schlüssel vorgeschrieben; es ist eine gute Praxis (und wir werden dies durchsetzen), die nicht veralteten Schlüssel mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Es zeigt, dass das Fehlen eines Wertes eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei sollte im gleichen PR aktualisiert werden, in dem Änderungen vorgenommen werden, die die Seitenleiste betreffen. Auf diese Weise ist die Seitenleiste immer auf dem neuesten Stand. Reviewer sollten keine PRs zusammenführen, die dies nicht übernehmen.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleiste in den Dateien in Ihrem PR alle Einträge korrekt anzeigt.

Die `GroupData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) auf GitHub.

## InterfaceData: Erfassung des Schnittstellen-Erbes

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet Vererbungen auf. In der Vergangenheit wurden auch Mixins aufgelistet, die von jeder Schnittstelle implementiert wurden; aber diese Nutzung ist nicht mehr empfohlen, und wir entfernen Mixins aus dieser Datei im gleichen Tempo, wie MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Erstellen von API-Seitenleisten und vom `\{{InheritanceDiagram}}` in den Schnittstellenseiten verwendet.

### Struktur von InterfaceData

Ein Eintrag in `InterfaceData.json` hat die folgende Struktur:

```json
"Name_of_the_interface": {
  "inh": "Name_of_the_parent_interface",
  "impl": []
}
```

> [!NOTE]
> Da Mixins veraltet sind, muss `"impl"` für alle neuen Schnittstellen eine leere Liste sein.

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner Eintrag, obligatorisch; wir dürfen keine Schnittstelle auflisten, die nicht von einer anderen erbt.

### Aktualisierungsprozess für InterfaceData

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren. Reviewer sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

Die `InterfaceData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) auf GitHub.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die `SpecData.json` Datei wird nicht mehr gepflegt. Kanonische Spezifikationsinformationen werden in w3c/browser-spec und im `spec_url` Schlüssel von Funktionen bei mdn/browser-compat-data gespeichert.

Die `\{{SpecName}}` und `\{{Spec2}}` Makros, die wir entfernen, verwenden die `SpecData.json` Datei. Wir akzeptieren keine weiteren Beiträge zur `SpecData.json` Datei; versuchen Sie stattdessen entweder, eine Spezifikationstabelle einzufügen, die das `\{{Specifications}}` Makro verwendet, oder versuchen Sie, den (guten) Link zur Spezifikation fest einzucodieren. Beachten Sie, dass das Erwähnen oder Verlinken einer Spezifikation außerhalb des _Specifications_ Abschnitts meist ein Hinweis darauf ist, dass etwas nicht angemessen auf MDN dokumentiert ist.

Die `SpecData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) auf GitHub.
