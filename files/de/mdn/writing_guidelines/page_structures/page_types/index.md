---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Es gibt eine Anzahl von Seitentypen, die auf MDN wiederholt verwendet werden.
Dieser Artikel beschreibt diese Seitentypen, deren Zweck und gibt Beispiele sowie Vorlagen für jeden Typ, die verwendet werden können, um eine neue Seite zu erstellen.

Auf MDN gibt es drei große Kategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen können.

- **Referenz**-Seiten beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**-Seiten beschreiben, wie etwas getan oder verwendet wird, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**-Seiten dienen hauptsächlich dazu, Links zu anderen Seiten bereitzustellen, in der Regel über verwandte Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden – sehen Sie sich den Abschnitt [Content-Repo](https://github.com/mdn/content) über [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen an.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur / Inhalte verwendet haben, indem Sie sich auf eine unserer Seitentemplates beziehen – sehen Sie die folgenden Abschnitte.
Den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden Sie über den Link "Quellcode auf **GitHub**" am unteren Rand jeder Vorlage.
Diese Seitentemplates ergeben als veröffentlichte Seiten keinen großen Sinn. Wenn Sie jedoch ihren Quellcode ansehen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, wie Sie fehlende Informationen ausfüllen und Ihre Seite erstellen können.

Am oberen Rand jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor Veröffentlichung entfernen_ – dieser enthält Informationen dazu, wie Sie den Seitentitel, den Slug, das Seitenleisten-Menü und die Tags ausfüllen (z. B. Informationen, die nicht tatsächlich im Text des Artikels erscheinen).
Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen befolgt haben, bevor die Seite als fertig angesehen werden kann.

## Seitenlayouts im alten Stil

Manchmal werden Sie auf Referenzseiten im alten Stil stoßen, die deutlich anders aussehen als die hier vorgestellten Vorlagen.
Zum Beispiel enthielten alte Schnittstellenseiten alle Details der Mitglieder einer Schnittstelle auf einer einzigen Seite, und individuelle Seiten für Methoden/Eigenschaften/Konstruktoren/Ereignislistener existierten nicht.

Wenn Sie auf eine alte Seite stoßen, würden wir uns freuen, wenn Sie diese auf den neuen Stil aktualisieren!
Wir wissen jedoch zu schätzen, dass dies eine große Menge Arbeit bedeuten kann.
Falls die Informationen auf der Seite nicht zu umfangreich sind und Sie etwas freie Zeit haben, können Sie versuchen, sie in den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, um die Arbeit zu priorisieren:

- Wie veraltet sind die Informationen?
- Wie schlecht ist die Qualität der Informationen?
- Wie populär ist das Feature? Wie gesucht sind die Informationen?

Wenn Sie ein Team zusammenstellen möchten, um an einem Update zu arbeiten, oder wenn Sie einige Inhalte, die aktualisiert werden müssen, melden oder diskutieren möchten, können Sie gerne ein [Inhaltsproblem melden](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der Frontmatter-Schlüssel für den Seitentyp

Wir haben einen Frontmatter-Schlüssel `page-type` definiert, um den Typ der MDN-Seiten klar zu identifizieren. Die hier verlinkten Vorlagen geben an, welche Werte für `page-type` Sie für jeden Seitentyp setzen sollten.

Die vollständige Liste der Seitentypen finden Sie unter [Der Frontmatter-Schlüssel für Seitentypen](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitentemplates

Unten finden Sie Beispiele für die verschiedenen Seitentypen auf MDN, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte zu erstellen, darunter die folgenden Seiten:

- [API-Landingpages](#api-landingpage)
- [API-Referenzseite](#api-referenzseite)
- [Unterseite einer API-Referenzseite](#unterseite_einer_api-referenzseite)
- [Konzeptuelle Seiten](#conceptual_page)
- [CSS-Feature-Referenz](#css_feature_reference_page)
- [CSS-Modul-Landingpages](#css_module_landing_page)
- [Glossareinträge](#glossary_page)
- [HTML-Elemente](#html_element_reference_page)
- [HTTP-Header](#http_header_reference_page)
- [Landingpages](#landing_page)
- [SVG-Elemente](#svg_element_reference_page)
- [Seiten zur Webentwicklung lernen](#learn_web_development_pages)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Landingpage

Eine **{{Glossary("API", "API")}}-Landingpage** bietet einen Überblick darüber, was eine bestimmte API leistet, sowie Links zur Dokumentation für jede der Schnittstellen, globale Objekte, Funktionen usw., die von der API bereitgestellt werden.
Sie verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Einführungstextes.
Dies ist primär eine _Navigationsseite_, fungiert jedoch auch als Überblicks-_Referenzseite_ für die API.

In einigen Fällen existieren mehrere APIs, die unterschiedliche Aspekte abdecken und durch ihre eigenen Spezifikationen definiert werden, aber dennoch eng miteinander verbunden sind, weshalb es sinnvoll ist, sie auf einer einzigen Landingpage abzudecken.
Beispielsweise behandelt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Anliegen zu Sensoren, während spezifischere Anliegen in anderen APIs wie [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. behandelt werden.
In solchen Fällen ist es sinnvoll, die allgemeinen Konzepte nicht jeweils mehrfach zu wiederholen, sondern alles unter einer zentralen Landingpage, wie z. B. „Websensoren“, zusammenzufassen.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API-Landingpage-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch bekannt als _Schnittstellen-Landingpage_.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind.
Sie gibt einen Überblick darüber, was die Klasse oder Schnittstelle tut bzw. wozu diese verwendet wird, und verlinkt zu der Dokumentation jedes dieser Mitglieder.
Sie ist detaillierter als eine API-Landingpage, welche typischerweise zu mehreren API-Referenzseiten verlinkt.

#### Beispiel

- [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API-Referenzseiten-Template](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### Unterseite einer API-Referenzseite

Eine **Unterseite einer API-Referenzseite** ist eine untergeordnete Seite einer API-Referenzseite.
Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- [`count()`-Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex)-Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [Eigenschaft `capabilities`](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay)-Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Konstruktor `Request()`](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request)-Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [Ereignis `vrdisplaypresentchange`](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), gehört zur [Window](/de/docs/Web/API/Window)-Schnittstelle)

#### Vorlagen

- [Vorlage einer API-Methoden-Unterseite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [Vorlage einer API-Eigenschaften-Unterseite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [Vorlage einer API-Konstruktorunterseite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [Vorlage einer API-Ereignis-Unterseite](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

...
