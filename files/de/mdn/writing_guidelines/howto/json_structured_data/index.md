---
title: Anleitung zur Verwendung von strukturierten Daten
short-title: Verwendung strukturierter Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

MDN speichert Daten, wann immer möglich, in gut definierten Strukturen. Diese Informationen werden dann zentralisiert und können einmal aktualisiert werden, während sie an mehreren Stellen verwendet werden.

Es gibt mehrere dieser Dateien, und dieses Dokument beschreibt ihren Zweck, ihre Struktur und den Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Der Satz von APIs, der unter einem Namen gruppiert ist, ist eine Konvention, die zur Kommunikation über ein Merkmal verwendet wird, ohne technische Durchsetzung.

Dennoch benötigt MDN diese Informationen, um zusammenhängende Web-API-Seitenleisten zu erstellen (wie mit dem `\{{APIRef}}` Makro) mit den entsprechenden Referenzseiten, Leitfäden und Überblicksartikeln.

GroupData tut genau das: Für jede API listet es die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit wurden auch Wörterbücher und Rückrufe aufgelistet. Aber diese Verwendung, obwohl noch unterstützt, ist veraltet und wird in Zukunft entfernt.

### Struktur von GroupData

> [!WARNING]
> Nicht existierende Seiten, die in dieser Datei aufgelistet sind, werden ignoriert (in en-US).

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleistenmakros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der Name, der in der Seitenleiste selbst angezeigt wird. Wählen Sie ihn sorgfältig.
    > [!WARNING]
    > Wenn Sie den Namen ändern möchten, der in der Seitenleiste angezeigt wird, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den `"Name_of_the_API"` Text verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden sollen. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgeführt werden. Sie werden automatisch der Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften auf anderen Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR-API zum `navigator` Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgeführt werden. Sie werden automatisch der Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse auf anderen Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_.
    > [!NOTE]
    > Die auf die in `"interfaces"` aufgelisteten Schnittstellen zielenden Ereignisse **dürfen** dort nicht aufgeführt werden. Sie werden automatisch der Seitenleiste hinzugefügt, wenn der `page-type` Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach demselben Prinzip arbeiten. Da wir diese Einheiten nicht mehr auf eigenen Seiten dokumentieren, ist ihre Verwendung veraltet, und es sollte kein neuer Eintrag mehr hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Außerdem sind keine der Schlüssel obligatorisch; es ist eine gute Praxis (und wir werden dies durchsetzen), die nicht veralteten Schlüssel mit einer leeren Liste hinzuzufügen, anstatt sie zu weglassen. Es zeigt, dass das Fehlen eines Werts eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei, die sich unter [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) befindet, sollte im selben PR aktualisiert werden, in dem Änderungen, die die Seitenleiste betreffen, vorgenommen werden. Auf diese Weise ist die Seitenleiste immer auf dem neuesten Stand. Rezensenten sollten keine PRs zusammenführen, die dies nicht beachten.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleiste in den Dateien Ihres PR alle Einträge korrekt anzeigt.

## InterfaceData: Aufzeichnung der Vererbung von Schnittstellen

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet Vererbungen auf. In der Vergangenheit wurden auch Mixins aufgeführt, die von jeder Schnittstelle implementiert werden; aber diese Nutzung ist veraltet, und wir entfernen Mixins aus dieser Datei, sobald MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Erstellen von API-Seitenleisten und durch das `\{{InheritanceDiagram}}` in den Schnittstellenseiten verwendet.

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

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren, die sich unter [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) befindet. Rezensenten sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die Datei [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) wird nicht mehr gepflegt.
> Kanonische Spezifikationsinformationen werden bei [w3c/browser-specs](https://github.com/w3c/browser-specs) und im `spec_url` Schlüssel von in [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) definierten Merkmalen gespeichert.

Wir akzeptieren keine weiteren Beiträge zur `SpecData.json` Datei; stattdessen fügen Sie eine Spezifikationstabelle mit dem `\{{Specifications}}` Makro ein oder verlinken Sie zur Spezifikation im Fließtext.
Beachten Sie, dass es die meiste Zeit ein Zeichen dafür ist, dass etwas auf MDN nicht angemessen dokumentiert ist, wenn eine Spezifikation außerhalb des _Specifications_-Abschnitts erwähnt oder verlinkt wird.
