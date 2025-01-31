---
title: Anleitung zur Verwendung strukturierter Daten
short-title: Verwendung strukturierter Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

MDN speichert Daten nach Möglichkeit in klar definierten Strukturen. Diese Informationen werden zentralisiert und können einmal aktualisiert werden, um in zahlreichen Bereichen genutzt zu werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt deren Zweck, Struktur und Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Die Menge der APIs, die unter einem Namen gruppiert sind, ist eine Konvention zur Kommunikation über ein Feature, ohne technische Durchsetzung.

MDN benötigt diese Informationen jedoch, um kohärente Web-API-Seitenleisten (wie mit dem `\{{APIRef}}` Makro) mit den richtigen Referenzseiten, Leitfäden und Überblicksartikeln zu erstellen.

GroupData tut genau das: Für jede API listet es die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit wurden auch Wörterbücher und Rückrufe gelistet. Aber diese Verwendung, obwohl noch unterstützt, ist veraltet und wird in Zukunft entfernt.

### Struktur von GroupData

> [!WARNING]
> Nicht existierende Seiten, die in dieser Datei aufgeführt sind, werden ignoriert (auf en-US).

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleistenmakros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der Name, der in der Seitenleiste selbst angezeigt wird. Wählen Sie ihn mit Bedacht.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den `"Name_of_the_API"`-Text verwendet wird. Der Wert ist der _Titel der Seite_ und die Seite muss im Verzeichnis `web/api/` sein.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der angegebenen Reihenfolge in der Seitenleiste dargestellt werden. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgeführt werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften auf anderen Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR-API dem `navigator`-Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgeführt werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_ (die unter `Web/Events` liegen müssen)
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` aufgelisteten Schnittstellen abzielen, **dürfen** dort nicht aufgeführt werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach dem gleichen Prinzip arbeiten. Da wir diese Entitäten nicht mehr auf ihren eigenen Seiten dokumentieren, ist deren Verwendung veraltet, und es sollten keine neuen Einträge hinzugefügt werden (wir entfernen sie nach und nach).

> [!NOTE]
> Auch ist keiner der Schlüssel obligatorisch; es ist eine gute Praxis (und wir werden dies durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Das zeigt, dass das Fehlen von Werten eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei sollte im gleichen PR aktualisiert werden, in dem Änderungen vorgenommen werden, die die Seitenleiste betreffen. Auf diese Weise ist die Seitenleiste immer aktuell. Reviewer sollten keine PRs zusammenführen, die dies nicht umsetzen.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleiste in den Dateien in Ihrem PR alle Einträge korrekt anzeigt.

Die `GroupData.json`-Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) auf GitHub.

## InterfaceData: Aufzeichnen der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den Daten, die über w3c/webref verfügbar sind, zu generieren.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet die Vererbung auf. In der Vergangenheit wurden auch Mixins aufgelistet, die von jeder Schnittstelle implementiert wurden; aber diese Verwendung ist veraltet, und wir entfernen Mixins aus dieser Datei mit demselben Tempo, in dem MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Erstellen von API-Seitenleisten und durch das `\{{InheritanceDiagram}}` auf den Schnittstellenseiten verwendet.

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

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner Eintrag, obligatorisch; wir dürfen keine Schnittstellen aufführen, die nicht von einer anderen erben.

### Aktualisierungsprozess für InterfaceData

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren. Reviewer sollten PRs, die dies nicht tun, nicht zusammenführen.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

Die `InterfaceData.json`-Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) auf GitHub.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die `SpecData.json`-Datei wird nicht mehr gepflegt. Kanonische Spezifikationsinformationen werden bei w3c/browser-spec und im `spec_url`-Schlüssel von Features bei mdn/browser-compat-data gespeichert.

Die `\{{SpecName}}` und `\{{Spec2}}` Makros, die wir entfernen, verwenden die `SpecData.json`-Datei. Wir akzeptieren keine weiteren Beiträge zur `SpecData.json`-Datei; versuchen Sie stattdessen, eine Spezifikationstabelle mit dem `\{{Specifications}}` Makro einzufügen, oder versuchen Sie, den (guten) Link zur Spezifikation fest zu codieren. Beachten Sie, dass das Erwähnen oder Verlinken einer Spezifikation außerhalb des _Specifications_-Abschnitts meist ein Zeichen dafür ist, dass etwas auf MDN nicht angemessen dokumentiert wurde.

Die `SpecData.json`-Datei befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) auf GitHub.
