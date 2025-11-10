---
title: Anleitung zur Verwendung von strukturierten Daten
short-title: Verwenden von strukturierten Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

MDN speichert Daten, wann immer möglich, in gut definierten Strukturen. Diese Informationen werden dann zentralisiert und können einmalig aktualisiert werden, während sie an verschiedenen Stellen genutzt werden.

Es gibt mehrere solche Dateien, und dieses Dokument beschreibt ihren Zweck, ihre Struktur und den Pflegeprozess.

## GroupData: Logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web-APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Der unter einem Namen gruppierte Satz von APIs ist eine Konvention, die zur Kommunikation über eine Funktion verwendet wird, ohne dass eine technische Durchsetzung erfolgt.

Dennoch benötigt MDN diese Informationen, um kohärente Web-API-Seitenelemente (wie mit dem `\{{APIRef}}` Makro) mit den passenden Referenzseiten, Leitfäden und Überblicksartikeln zu erstellen.

GroupData übernimmt genau diese Aufgabe: Für jede API listet es die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Überblicksseiten auf. In der Vergangenheit listete es auch Wörterbücher und Rückrufe auf. Diese Nutzung wird zwar noch unterstützt, ist jedoch veraltet und wird in Zukunft entfernt.

### Struktur von GroupData

> [!WARNING]
> Nicht existierende Seiten, die in dieser Datei aufgelistet sind, werden ignoriert (in en-US).

Ein Eintrag in `GroupData.json` hat die folgende Struktur:

```json
{
  "Name_of_the_API": {
    "overview": ["name_of_the_overview_page"],
    "guides": [
      "name_of_guide_1"
      // …
    ],
    "interfaces": [
      "name_of_interface_1"
      // …
    ],
    "methods": [
      "name_of_additional_method_1"
      // …
    ],
    "properties": [
      "name_of_additional_property_1"
      // …
    ],
    "events": [
      "name_of_additional_property_1"
      // …
    ]
  }
}
```

…wo:

- `"Name_of_the_API"`
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleisten-Makros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der im Seitenleisten angezeigt wird. Wählen Sie ihn mit Bedacht.
    > [!WARNING]
    > Wenn Sie den Namen, der in der Seitenleiste angezeigt wird, ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den `"Name_of_the_API"` Text verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss im Verzeichnis `web/api/` liegen.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgelistet werden. Sie werden automatisch in die Seitenleiste aufgenommen, wenn der `page-type` Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften auf anderen Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR API zum `navigator` Objekt hinzufügt).
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgelisteten Schnittstellen **dürfen** dort nicht aufgelistet werden. Sie werden automatisch in die Seitenleiste aufgenommen, wenn der `page-type` Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet die Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_.
    > [!NOTE]
    > Die Ereignisse, die die in `"interfaces"` aufgelisteten Schnittstellen ansprechen, **dürfen** dort nicht aufgelistet werden. Sie werden automatisch in die Seitenleiste aufgenommen, wenn der `page-type` Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach dem gleichen Prinzip arbeiten. Da wir diese Entitäten nicht mehr auf ihren eigenen Seiten dokumentieren, ist ihre Verwendung veraltet, und es sollten keine neuen Einträge hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Auch sind keine der Schlüssel verpflichtend; es ist gute Praxis (und wir werden das durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Dies zeigt, dass das Fehlen eines Werts eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei, die sich unter [`files/jsondata/GroupData.json`](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) befindet, sollte in dem gleichen PR aktualisiert werden, in dem Änderungen, die die Seitenleiste betreffen, erfolgen. So bleibt die Seitenleiste immer aktuell. Prüfer sollten keine PRs zusammenführen, die dies nicht übernehmen.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleiste in den Dateien in Ihrem PR alle Einträge korrekt anzeigt.

## InterfaceData: Aufzeichnung der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den verfügbaren Daten über w3c/webref generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet Vererbung auf. In der Vergangenheit listete es auch Mixins auf, die von jeder Schnittstelle implementiert wurden; aber diese Nutzung ist veraltet, und wir entfernen Mixins aus dieser Datei in dem Maße, wie MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Erstellen von API-Seitenleisten und durch das `\{{InheritanceDiagram}}` auf den Interface-Seiten verwendet.

### Struktur von InterfaceData

Ein Eintrag in `InterfaceData.json` hat die folgende Struktur:

```json
{
  "Name_of_the_interface": {
    "inh": "Name_of_the_parent_interface",
    "impl": []
  }
}
```

> [!NOTE]
> Da Mixins veraltet sind, muss `"impl"` für alle neuen Schnittstellen eine leere Liste sein.

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner obligatorischer Eintrag; wir dürfen keine Schnittstelle aufführen, die nicht von einer anderen erbt.

### Aktualisierungsprozess für InterfaceData

Der gleiche PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei, die sich unter [`files/jsondata/InterfaceData.json`](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) befindet, aktualisieren. Prüfer sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die Datei [`SpecData.json`](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) wird nicht mehr gepflegt.
> Kanonische Spezifikationsinformationen werden bei [w3c/browser-specs](https://github.com/w3c/browser-specs) und im `spec_url` Schlüssel von Funktionen, die bei [mdn/browser-compat-data](https://github.com/mdn/browser-compat-data) definiert sind, gespeichert.

Wir akzeptieren keine weiteren Beiträge zur `SpecData.json` Datei; stattdessen fügen Sie eine Spezifikationstabelle mithilfe des `\{{Specifications}}` Makros ein oder verlinken die Spezifikation im Fließtext.
Beachten Sie, dass das Erwähnen oder Verlinken einer Spezifikation außerhalb des _Spezifikationen_ Abschnitts meist ein Zeichen dafür ist, dass etwas auf MDN nicht angemessen dokumentiert ist.
