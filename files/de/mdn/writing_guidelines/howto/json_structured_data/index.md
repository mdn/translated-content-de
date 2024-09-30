---
title: Anleitung zur Verwendung von strukturierten Daten
slug: MDN/Writing_guidelines/Howto/JSON_Structured_data
l10n:
  sourceCommit: 188594e189f5e73267faf2626adbb84d26128b15
---

{{MDNSidebar}}

MDN speichert Daten in gut definierten Strukturen, wann immer dies möglich ist. Diese Informationen werden dann zentralisiert und können einmalig aktualisiert und an vielen Stellen genutzt werden.

Es gibt mehrere solcher Dateien, und dieses Dokument beschreibt ihren Zweck, ihre Struktur und den Wartungsprozess.

## GroupData: logische Gruppierung von APIs

`GroupData` ist eine JSON-Datei, die Informationen über Web APIs sammelt. Die Gruppierung von APIs ist etwas unscharf: Jede Schnittstelle, Methode oder Eigenschaft kann Teil mehrerer APIs sein. Die unter einem Namen gruppierten APIs sind eine Konvention, die dazu dient, über ein Feature zu kommunizieren, ohne technischen Zwang.

Dennoch benötigt MDN diese Informationen, um kohärente Web-API-Seitenleisten (wie mit dem `\{{APIRef}}`-Makro) mit den richtigen Referenzseiten, Leitfäden und Überblicksartikeln zu erstellen.

GroupData tut genau das: Für jede API listet sie die Schnittstellen, Eigenschaften, Methoden, Leitfäden und Übersichtsseiten auf. In der Vergangenheit wurden auch Wörterbücher und Rückrufe aufgelistet. Aber diese Verwendung, obwohl noch unterstützt, ist veraltet und wird in Zukunft entfernt.

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
  - : Dieser Schlüssel ist sowohl eine ID, die von Seitenleisten-Makros wie `\{{APIRef("Name_of_the_API")}}` verwendet wird, als auch der Name, der in der Seitenleiste selbst angezeigt wird. Wählen Sie ihn mit Bedacht.
    > [!WARNING]
    > Wenn Sie den in der Seitenleiste angezeigten Namen ändern möchten, müssen Sie alle Seiten bearbeiten, die ihn anzeigen.
- `"overview"`
  - : Dies ist eine Liste, die eine Seite enthält: die Übersichtsseite, die als Link für den `"Name_of_the_API"`-Text verwendet wird. Der Wert ist der _Titel der Seite_, und die Seite muss sich im Verzeichnis `web/api/` befinden.
- `"guides"`
  - : Dies ist eine Liste von Leitfäden, die in der Seitenleiste in der angegebenen Reihenfolge angezeigt werden sollen. Die Werte sind _Pfade zur Seite_, beginnend mit `/docs/`.
- `"interfaces"`
  - : Dies listet die Schnittstellen auf, die Teil der API sind.
- `"methods"`
  - : Dies listet die Methoden auf, die Teil der API sind.
    > [!NOTE]
    > Die Methoden der in `"interfaces"` aufgelisteten Schnittstellen **müssen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-method` oder `web-api-instance-method` ist.
- `"properties"`
  - : Dies listet die Eigenschaften anderer Schnittstellen auf, die Teil der API sind, wie `navigator.xr` (eine Eigenschaft, die die WebXR API dem `navigator`-Objekt hinzufügt)
    > [!NOTE]
    > Die Eigenschaften der in `"interfaces"` aufgelisteten Schnittstellen **müssen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-static-property` oder `web-api-instance-property` ist.
- `"events"`
  - : Dies listet Ereignisse anderer Schnittstellen auf, die Teil der API sind. Die Werte sind die _Titel der Seiten_ (die unter `Web/Events` abgelegt sein müssen)
    > [!NOTE]
    > Die Ereignisse, die auf die in `"interfaces"` aufgelisteten Schnittstellen abzielen, **müssen** dort nicht aufgelistet werden. Sie werden automatisch zur Seitenleiste hinzugefügt, wenn der `page-type`-Schlüssel für diese Seite `web-api-event` ist.

Es gibt zwei weitere Schlüssel, `"dictionaries"` und `"callbacks"`, die nach dem gleichen Prinzip arbeiten. Da wir diese Entitäten nicht mehr in eigenen Seiten dokumentieren, ist deren Verwendung veraltet, und ein neuer Eintrag sollte ihnen nicht hinzugefügt werden (und wir entfernen sie nach und nach).

> [!NOTE]
> Auch sind keine der Schlüssel zwingend erforderlich; es ist gute Praxis (und wir werden dies durchsetzen), die nicht veralteten mit einer leeren Liste hinzuzufügen, anstatt sie wegzulassen. Es zeigt, dass das Fehlen eines Wertes eine bewusste Entscheidung ist.

### Aktualisierungsprozess für GroupData

Diese Datei sollte im selben PR aktualisiert werden, in dem Änderungen an der Seitenleiste vorgenommen werden. So bleibt die Seitenleiste immer aktuell. Bewerter sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, ob die Seitenleiste in den Dateien Ihrer PR alle Einträge korrekt anzeigt.

Die Datei `GroupData.json` befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json) auf GitHub.

## InterfaceData: Aufzeichnung der Schnittstellenvererbung

> [!NOTE]
> Wir hoffen, diese Datei in Zukunft automatisch aus den über w3c/webref verfügbaren Daten generieren zu können.

`InterfaceData` beschreibt die Hierarchie der Schnittstellen. Es listet die Vererbung auf. In der Vergangenheit wurden auch Mixins aufgelistet, die von jeder Schnittstelle implementiert wurden; aber dieser Gebrauch ist veraltet, und wir entfernen Mixins aus dieser Datei in dem Tempo, in dem MDN aktualisiert wird.

Diese Vererbungsdaten werden beim Aufbau von API-Seitenleisten und vom `\{{InheritanceDiagram}}` in den Schnittstellenseiten verwendet.

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

Der Wert von `"Name_of_the_parent_interface"` ist keine Liste, sondern ein einzelner Eintrag, zwingend erforderlich; wir dürfen keine Schnittstelle auflisten, die nicht von einer anderen erbt.

### Aktualisierungsprozess für InterfaceData

Im selben PR, der eine neue Schnittstelle hinzufügt, die von einer anderen erbt, muss diese Datei aktualisiert werden. Bewerter sollten keine PRs zusammenführen, die dies nicht tun.

Um Ihre Änderungen zu testen, überprüfen Sie, dass die Seitenleisten jeder Schnittstelle, die Sie in Ihrem PR bearbeitet haben, die Vererbung korrekt anzeigen.

Die Datei `InterfaceData.json` befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/InterfaceData.json) auf GitHub.

## SpecData: Spezifikationsinformationen

> [!WARNING]
> Die Datei `SpecData.json` wird nicht mehr gepflegt. Kanonische Spezifikationsinformationen werden bei w3c/browser-spec und im Schlüssel `spec_url` von Features bei mdn/browser-compat-data gespeichert.

Die `\{{SpecName}}` und `\{{Spec2}}`-Makros, die wir entfernen, verwenden die Datei `SpecData.json`. Wir akzeptieren keine weiteren Beiträge zur Datei `SpecData.json`; versuchen Sie stattdessen, entweder eine Spezifikationstabelle mit dem `\{{Specifications}}`-Makro einzufügen oder den (guten) Link zur Spezifikation fest zu codieren. Beachten Sie, dass das Erwähnen oder Verlinken zu einer Spezifikation außerhalb des Abschnitts _Spezifikationen_ in den meisten Fällen ein Anzeichen dafür ist, dass etwas in MDN nicht angemessen dokumentiert wurde.

Die Datei `SpecData.json` befindet sich [hier](https://github.com/mdn/content/blob/main/files/jsondata/SpecData.json) auf GitHub.
