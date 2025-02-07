---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele sowie Vorlagen zur Erstellung einer neuen Seite.

Auf MDN gibt es drei Hauptkategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen können:

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten erklären, wie man etwas tut oder verwendet, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten dienen hauptsächlich dazu, Links zu anderen Seiten bereitzustellen, die üblicherweise verwandte Themen behandeln.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — sehen Sie sich den Abschnitt über das [Content-Repo](https://github.com/mdn/content) an, insbesondere die Informationen zum [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen.

## Verwendung der Vorlagen

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie auf eine unserer Seitentemplates verweisen — siehe die nachstehenden Abschnitte. Den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden Sie über den Link "Source on **GitHub**" am Ende einer jeden Vorlage. Diese Seitentemplates sind als veröffentlichte Seiten eher weniger sinnvoll, aber im Quellcode sehen Sie viele hilfreiche Kommentare, Platzhalter und Hinweise, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor Veröffentlichung entfernen_ — dieser enthält Informationen darüber, wie Sie den Seitentitel, den „Slug“, das Seitenleistenmenü und Tags ausfüllen (z. B. Informationen, die nicht im Hauptteil des Artikels erscheinen). Dieser Abschnitt muss gelöscht werden, nachdem Sie die Anweisungen befolgt haben, bevor die Seite als abgeschlossen betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier vorgestellten Templates unterscheiden. Beispielsweise enthielten alte Interface-Seiten alle Details der Mitglieder eines Interfaces auf einer einzigen Seite, und einzelne Methoden-/Eigenschaften-/Konstruktor- oder Ereignis-Listener-Seiten existierten nicht.

Wenn Sie auf ein altes Set von Seiten stoßen, würden wir uns freuen, wenn Sie diese auf den neuen Stil aktualisieren! Wir verstehen jedoch, dass dies eine umfangreiche Arbeit sein kann. Wenn die Informationen, die aktualisiert werden müssen, überschaubar sind und Sie etwas Zeit übrig haben, versuchen Sie gerne, diese auf den neuen Stil zu bringen.

Falls der Arbeitsaufwand signifikant ist, sollten Sie einige Faktoren bei der Priorisierung der Arbeit berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um ein Update durchzuführen, oder nur einige Inhalte, die ein Update benötigen, melden oder diskutieren möchten, können Sie gerne ein [Content-Problem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der „page-type“-Front-Matter-Schlüssel

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten eindeutig zu identifizieren. Die unten verlinkten Vorlagen zeigen, welche Werte Sie für den jeweiligen Seitentyp im `page-type`-Schlüssel festlegen sollten.

Die vollständige Liste der Seitentypen finden Sie unter [Der „page-type“-Front-Matter-Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Nachfolgend finden Sie Beispiele der verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte zu erstellen. Diese umfassen unter anderem die folgenden Seitentypen:

- [API-Einstiegsseiten](#api-einstiegsseite)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [Konzeptseiten](#conceptual_page)
- [CSS-Feature-Referenz](#css_feature_reference_page)
- [CSS-Modul-Einstiegsseite](#css_module_landing_page)
- [Glossareintrag](#glossary_page)
- [HTML-Element](#html-element-referenzseite)
- [HTTP-Header](#http_header_reference_page)
- [Einstiegsseite](#landing_page)
- [SVG-Element](#svg-element-referenzseite)
- [Webentwicklung lernen Seiten](#learn_web_development_pages)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Einstiegsseite

Eine **{{Glossary("API", "API")}}-Einstiegsseite** bietet eine Übersicht darüber, was eine bestimmte API macht, sowie Links zur Dokumentation von Interfaces, globalen Objekten, Funktionen usw., die von der API angeboten werden. Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Sie ist primär eine _Navigations_-Seite, kann jedoch auch als schnelle _Referenz_-Seite für die API fungieren.

Manchmal gibt es mehrere eindeutige APIs, die in ihren eigenen Spezifikationen definiert sind, aber eng miteinander verwandt sind und daher sinnvollerweise auf einer einzigen API-Einstiegsseite behandelt werden können. Zum Beispiel deckt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensorthemen ab, während spezifischere Themen in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/) oder [Motion Sensor](https://www.w3.org/TR/motion-sensors/) behandelt werden. In solchen Fällen macht es oft Sinn, die wichtigen Konzepte auf einer einzigen Einstiegsseite wie "Web-Sensoren" zu bündeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Einstiegsseiten-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Interface-Einstiegsseite_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder eines bestimmten Interfaces oder einer Klasse sind. Sie bietet einen Überblick darüber, worum es bei der Klasse oder dem Interface geht und gibt Links zur Dokumentation der jeweiligen Mitglieder.

#### Beispiel

- [„Request“-Interface](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist eine Unterseite einer API-Referenzseite. Sie dokumentiert ein einzelnes Interface-Mitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) des [IDBIndex](/de/docs/Web/API/IDBIndex)-Interfaces (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [`capabilities`-Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) des [VRDisplay](/de/docs/Web/API/VRDisplay)-Interfaces (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [`Request()`-Konstruktor](/de/docs/Web/API/Request/Request) des [Request](/de/docs/Web/API/Request)-Interfaces (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))

#### Vorlagen

- [API-Methode-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API-Eigenschafts-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API-Konstruktor-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API-Ereignis-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Details.

#### Beispiel

- [`<video>`-Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML-Elementseiten-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erklärt den Zweck und die Verwendung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Details.

#### Beispiel

- [\<g>-Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG-Elementseiten-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

...
