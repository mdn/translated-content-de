---
title: Anleitung zur Verwendung strukturierter Daten
short-title: Verwenden strukturierter Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

MDN speichert Daten, wenn möglich, in gut definierten Strukturen. Diese Informationen werden zentralisiert und können einmalig aktualisiert werden, während sie an verschiedenen Stellen genutzt werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt deren Zweck, Struktur und Wartungsprozess.

## GroupData: Logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Das Set von APIs, die unter einem Namen gruppiert sind, ist eine Konvention, um über ein Feature zu kommunizieren, ohne technische Durchsetzung.

Dennoch benötigt MDN diese Informationen, um kohärente Web-API-Seitenleisten zu erstellen (wie mit dem `\{{APIRef}}` Makro) mit den richtigen Referenzseiten, Leitfäden und Übersichtsartikeln.

GroupData tut genau das: Für jede API listet sie die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit listete sie auch Dictionaries und Callbacks auf. Aber diese Nutzung, obwohl noch unterstützt, ist veraltet und wird in Zukunft entfernt.

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleistenmakros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der Name, der in der Seitenleiste angezeigt wird. Wählen Sie ihn weise.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den Text `"Name_of_the_API"` verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` gelisteten Schnittstellen **dürfen** dort nicht aufgeführt sein. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften anderer Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR API dem `navigator`-Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` gelisteten Schnittstellen **dürfen** dort nicht aufgeführt sein. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_ (die sich unter `Web/Events` befinden müssen)
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` gelisteten Schnittstellen abzielen, **dürfen** dort nicht aufgeführt sein. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach demselben Prinzip arbeiten. Da wir diese Entitäten nicht mehr auf ihren eigenen Seiten dokumentieren, ist deren Nutzung veraltet und es sollten keine neuen Einträge hinzugefügt werden (und wir entfernen sie Stück für Stück).

> [!NOTE]
> Außerdem sind keine der Schlüssel obligatorisch; es ist eine gute Praxis (und wir werden dies durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Es zeigt, dass das Fehlen eines Wertes eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei, die sich unter [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) befindet, sollte in derselben PR aktualisiert werden, in der Änderungen, die die Seitenleiste betreffen, stattfinden. So bleibt die Seitenleiste stets aktuell. Reviewer sollten keine PRs zusammenführen, die dies nicht berücksichtigen.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleiste in den Dateien in Ihrer PR alle Einträge korrekt anzeigt.

## InterfaceData: Aufzeichnung der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Sie listet die Vererbung auf. In der Vergangenheit listete sie auch Mixins auf, die von jeder Schnittstelle implementiert wurden; aber diese Nutzung ist veraltet, und wir entfernen Mixins aus dieser Datei in dem Maße, wie MDN aktualisiert wird.

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
> Da Mixins veraltet sind, muss `"impl"` eine leere Liste für alle neuen Schnittstellen sein.

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner Eintrag, obligatorisch; wir dürfen keine Schnittstelle auflisten, die nicht von einer anderen erbt.

### Aktualisierungsprozess für InterfaceData

Die gleiche PR, die eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisieren, die sich unter [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) befindet. Reviewer sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleisten jeder Schnittstelle, die Sie in Ihrer PR bearbeitet haben, die Vererbung korrekt anzeigen.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die Datei [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) wird nicht mehr gepflegt.
> Kanonische Spezifikationsinformationen werden in [w3c/browser-specs](https://github.com/w3c/browser-specs) und im `spec_url`-Schlüssel der in [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) definierten Features gespeichert.

Wir akzeptieren keine weiteren Beiträge zur `SpecData.json` Datei; stattdessen fügen Sie eine Spezifikationstabelle mit dem `\{{Specifications}}` Makro ein, oder verlinken Sie auf die Spezifikation im Fließtext.
Beachten Sie, dass das Erwähnen oder Verlinken einer Spezifikation außerhalb des _Spezifikations_ Abschnitts meistens ein Zeichen für etwas nicht angemessen dokumentiertes auf MDN ist.
