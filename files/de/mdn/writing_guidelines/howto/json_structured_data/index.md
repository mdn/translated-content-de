---
title: Wie man strukturierte Daten verwendet
short-title: Verwenden von strukturierten Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: da12dd76d4c9863ce4f9c436f5e2373fe541e1c7
---

MDN speichert Daten, wenn möglich, in gut definierten Strukturen. Diese Informationen werden dann zentralisiert und können einmalig aktualisiert werden, während sie an zahlreichen Stellen verwendet werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt deren Zweck, Struktur und Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Die unter einem Namen gruppierte Menge von APIs ist eine Konvention, die verwendet wird, um über ein Feature zu kommunizieren, ohne dass eine technische Durchsetzung erfolgt.

MDN benötigt diese Informationen jedoch, um kohärente Web-API-Seitenleisten zu erstellen (z. B. mit dem `\{{APIRef}}`-Makro) mit den passenden Referenzseiten, Leitfäden und Übersichtsartikeln.

GroupData macht genau das: Für jede API listet es die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit wurden auch Wörterbücher und Rückrufe aufgelistet. Aber diese Nutzung ist zwar noch unterstützt, jedoch veraltet und wird in der Zukunft entfernt.

### Struktur von GroupData

> [!WARNING]
> Nicht existierende Seiten, die in dieser Datei aufgelistet sind, werden ignoriert (in en-US).

Ein Eintrag in `GroupData.json` hat folgende Struktur:

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleisten-Makros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der in der Seitenleiste angezeigte Name. Wählen Sie ihn sorgfältig.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den Text `"Name_of_the_API"` verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden sollen. Die Werte sind _Pfade zu den Seiten_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` gelisteten Schnittstellen **sollten** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften anderer Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR API dem `navigator`-Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` gelisteten Schnittstellen **sollten** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_ (die sich unter `Web/Events` befinden müssen)
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` gelisteten Schnittstellen abzielen, **sollten** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach demselben Prinzip arbeiten. Da wir diese Entitäten nicht mehr auf eigenen Seiten dokumentieren, ist deren Verwendung veraltet und es sollten keine neuen Einträge hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Außerdem ist keiner der Schlüssel obligatorisch; es ist eine gute Praxis (und wir werden dies durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Es zeigt, dass das Fehlen eines Wertes eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei sollte im selben PR aktualisiert werden, in dem Änderungen, die die Seitenleiste betreffen, vorgenommen werden. Auf diese Weise ist die Seitenleiste immer auf dem neuesten Stand. Reviewer sollten PRs, die dies nicht übernehmen, nicht zusammenführen.

Um Ihre Änderungen zu testen, überprüfen Sie, ob in den Dateien in Ihrem PR die Seitenleiste alle Einträge korrekt anzeigt.

Die `GroupData.json`-Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) auf GitHub.

## InterfaceData: Aufzeichnung der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten zu generieren.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet die Vererbung auf. In der Vergangenheit wurden auch Mixins aufgeführt, die von jeder Schnittstelle implementiert werden; aber diese Verwendung ist veraltet, und wir entfernen die Mixins aus dieser Datei in dem Maße, wie MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Erstellen von API-Seitenleisten und vom `\{{InheritanceDiagram}}` auf den Schnittstellenseiten verwendet.

### Struktur von InterfaceData

Ein Eintrag in `InterfaceData.json` hat folgende Struktur:

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

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren. Reviewer sollten PRs, die dies nicht tun, nicht zusammenführen.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

Die `InterfaceData.json`-Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) auf GitHub.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die Datei [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) wird nicht mehr gepflegt.
> Kanonische Spezifikationsinformationen werden bei [w3c/browser-specs](https://github.com/w3c/browser-specs) und im `spec_url`-Schlüssel von Features aufbewahrt, die bei [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) definiert sind.

Wir akzeptieren keine weiteren Beiträge zur Datei `SpecData.json`; stattdessen fügen Sie eine Spezifikationstabelle unter Verwendung des `\{{Specifications}}`-Makros ein oder verlinken Sie die Spezifikation im Text.
Beachten Sie, dass das Erwähnen oder Verlinken einer Spezifikation außerhalb des _Specifications_-Abschnitts meist ein Zeichen dafür ist, dass etwas auf MDN nicht angemessen dokumentiert ist.
