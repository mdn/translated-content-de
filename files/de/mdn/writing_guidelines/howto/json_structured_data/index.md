---
title: Anleitung zur Nutzung strukturierter Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

MDN speichert Daten wenn möglich in gut definierten Strukturen. Diese Informationen werden dann zentralisiert und können einmal aktualisiert werden, während sie an zahlreichen Stellen verwendet werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt deren Zweck, Struktur und Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas verschwommen: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Der unter einem Namen gruppierte Satz von APIs ist eine Konvention, die verwendet wird, um über ein Feature zu kommunizieren, ohne dass eine technische Durchsetzung erfolgt.

Dennoch benötigt MDN diese Informationen, um kohärente Web-API-Seitenleisten (wie mit dem `\{{APIRef}}` Makro) zu erstellen, die die richtigen Referenzseiten, Leitfäden und Überblicksartikel enthalten.

GroupData leistet genau das: Für jede API listet sie die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit wurden auch Wörterbücher und Rückrufe aufgelistet. Aber diese Nutzung, obwohl noch unterstützt, ist veraltet und wird in Zukunft entfernt.

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleistenmakros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der Name, der in der Seitenleiste selbst angezeigt wird. Wählen Sie ihn weise.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den `"Name_of_the_API"`-Text verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der angegebenen Reihenfolge in der Seitenleiste angezeigt werden. Die Werte sind _Pfade zur Seite_, die mit `/docs/` beginnen.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgeführten Schnittstellen dürfen dort **nicht** aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften anderer Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR-API zum `navigator`-Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgeführten Schnittstellen dürfen dort **nicht** aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_ (die unter `Web/Events` liegen müssen)
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` aufgeführten Schnittstellen abzielen, dürfen dort **nicht** aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei andere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach demselben Prinzip arbeiten. Da wir diese Entitäten nicht mehr auf eigenen Seiten dokumentieren, ist ihre Verwendung veraltet, und es sollten keine neuen Einträge hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Auch sind keiner der Schlüssel obligatorisch; es ist gute Praxis (und wir werden dies durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Es zeigt, dass das Fehlen eines Wertes eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei sollte in dem gleichen PR aktualisiert werden, in dem Änderungen vorgenommen werden, die die Seitenleiste betreffen. Auf diese Weise ist die Seitenleiste immer auf dem neuesten Stand. Reviewer sollten keine PRs mergen, die dies nicht berücksichtigen.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleiste in den Dateien Ihres PRs alle Einträge korrekt anzeigt.

Die `GroupData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) auf GitHub.

## InterfaceData: Aufzeichnung der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet die Vererbung auf. In der Vergangenheit wurden auch Mixins aufgelistet, die von jeder Schnittstelle implementiert wurden; aber diese Nutzung ist veraltet, und wir entfernen Mixins aus dieser Datei im gleichen Tempo, in dem MDN aktualisiert wird.

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

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner Eintrag, obligatorisch; wir dürfen keine Schnittstelle aufführen, die nicht von einer anderen erbt.

### Aktualisierungsprozess für InterfaceData

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren. Reviewer sollten keine PRs mergen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleisten jeder von Ihnen im PR bearbeiteten Schnittstelle die Vererbung korrekt anzeigen.

Die `InterfaceData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) auf GitHub.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die `SpecData.json` Datei wird nicht mehr gepflegt. Kanonische Spezifikationsinformationen werden bei w3c/browser-spec und im `spec_url` Schlüssel von Funktionen bei mdn/browser-compat-data gespeichert.

Die `\{{SpecName}}` und `\{{Spec2}}` Makros, die wir entfernen, verwenden die `SpecData.json` Datei. Wir akzeptieren keine weiteren Beiträge zur `SpecData.json` Datei; stattdessen versuchen Sie, eine Spezifikationstabelle mit dem `\{{Specifications}}` Makro einzufügen, oder versuchen Sie, den (guten) Link zur Spezifikation hart zu kodieren. Beachten Sie, dass das Erwähnen oder Verlinken zu einer Spezifikation außerhalb des _Specifications_-Abschnitts oft ein Zeichen dafür ist, dass etwas auf MDN nicht angemessen dokumentiert ist.

Die `SpecData.json` Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) auf GitHub.
