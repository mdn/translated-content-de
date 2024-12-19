---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{MDNSidebar}}

Es gibt eine Reihe von Seitentypen, die auf MDN wiederholt verwendet werden. Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und gibt Beispiele sowie Vorlagen, die beim Erstellen einer neuen Seite verwendet werden können.

Auf MDN gibt es drei breite Kategorien von Seitentypen, obwohl einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenz**seiten beschreiben die Details von etwas und sind nach der Struktur des beschriebenen Objekts organisiert.
- **Leitfaden**seiten beschreiben, wie man etwas macht oder benutzt, und sind basierend auf den Zielen des Lesers organisiert.
- **Navigations**seiten existieren primär, um Links zu anderen Seiten bereitzustellen, gewöhnlich über verwandte Themen.

## Erstellen einer neuen Seite

Um neue Seiten auf MDN zu erstellen, müssen Sie GitHub verwenden — werfen Sie einen Blick auf unseren [Inhalts-Repo](https://github.com/mdn/content) Abschnitt über das [Hinzufügen eines neuen Dokuments](https://github.com/mdn/content/blob/main/CONTRIBUTING.md#adding-a-new-document) für weitere Anweisungen.

## Verwendung der Vorlagen

Wenn Sie eine neue Seite erstellen, können Sie sicherstellen, dass Sie die richtige Seitenstruktur/-inhalte verwendet haben, indem Sie sich auf eine unserer Seitenschablonen beziehen — siehe die Abschnitte unten. Der genaue Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) kann durch den "Source on **GitHub**" Link am Ende jeder Vorlage gefunden werden. Diese Seitenschablonen ergeben als veröffentlichte Seiten nicht viel Sinn, aber wenn Sie ihren Quellcode anzeigen, werden Sie feststellen, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die detailliert beschreiben, wie Sie die fehlenden Informationen ausfüllen und Ihre Seite erstellen können.

Am Anfang jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Vor der Veröffentlichung entfernen_ — dies enthält Informationen darüber, wie der Seitentitel, der Slug, das Seitenleistenmenü und die Tags auszufüllen sind (z.B. Informationen, die nicht im Text des Artikels erscheinen). Sie müssen diesen Abschnitt löschen, nachdem Sie die Anweisungen darin befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Alte Seitenlayouts

Manchmal stoßen Sie auf alte Referenzseiten, die sich deutlich von den hier präsentierten Vorlagen unterscheiden. Zum Beispiel hatten alte Schnittstellenseiten alle Details der Mitglieder der Schnittstellen auf einer einzigen Seite, und einzelne Methoden/Eigenschaften/Konstruktoren/Event-Listener-Seiten existierten nicht.

Wenn Sie auf eine alte Sammlung von Seiten stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren! Wir schätzen jedoch, dass dies eine Menge Arbeit sein kann. Wenn die Informationen, die aktualisiert werden müssen, nicht zu umfangreich sind und Sie etwas Freizeit haben, versuchen Sie unbedingt, sie in den neuen Stil zu aktualisieren.

Wenn die Arbeit umfangreicher ist, sollten Sie einige Faktoren berücksichtigen, wenn Sie die Arbeit priorisieren:

- Wie veraltet sind die Informationen?
- Wie niedrig ist die Qualität der Informationen?
- Wie populär ist die Funktion? Wie gefragt sind die Informationen?

Wenn Sie ein Team zusammenbringen möchten, um an einem Update zu arbeiten, oder wenn Sie nur ein Problem melden oder einen Verbesserungsvorschlag für Inhalte diskutieren möchten, zögern Sie nicht, [ein Content-Problem zu melden](https://github.com/mdn/content/issues) oder [uns um Hilfe zu bitten](/de/docs/MDN/Community/Communication_channels).

## Der „page-type“ Front Matter Schlüssel

Wir haben einen Front Matter Schlüssel `page-type` definiert, um den Typ von MDN-Seiten klar zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type` Werte Sie für jeden Seitentyp festlegen sollten.

Für die vollständige Liste der Seitentypen siehe [Der „page-type“ Front Matter Schlüssel](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Unten finden Sie Beispiele für die verschiedenen Seiten, die Sie auf MDN finden, zusammen mit Vorlagen, die verwendet werden können, um neue Inhalte basierend auf dem zu präsentierenden Inhaltstyp zu erstellen, einschließlich der folgenden Seiten:

- [API Einstiegsseiten](#api_einstiegsseite)
- [API Referenzseiten](#api_referenzseiten)
- [API Referenzunterseiten](#api_referenzunterseite)
- [Konzeptionelle Seiten](#konzeptionelle_seite)
- [CSS Feature Referenz](#css_feature_referenzseite)
- [CSS Modul Einstiegsseite](#css_modul_einstiegsseite)
- [Glossareinträge](#glossarseite)
- [HTML-Element](#html_element_referenzseite)
- [HTTP Header](#http_header_referenzseite)
- [Einstiegsseite](#einstiegsseite)
- [SVG-Element](#svg_element_referenzseite)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API Einstiegsseite

Eine **{{Glossary("API", "API")}} Einstiegsseite** bietet einen Überblick darüber, was eine bestimmte API macht, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, globalen Funktionen usw. Es verlinkt nicht direkt zu spezifischen Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Übersichtstextes. Primär ist es eine _Navigations_ seite, funktioniert aber auch als eine schnelle _Referenz_ seite für die API.

Es gibt einige Fälle, in denen mehrere APIs existieren, die eigenständig sind und eigene Spezifikationen haben, aber eng verwandt sind und daher sinnvollerweise mit einer einzigen API Einstiegsseite abgedeckt werden könnten. Zum Beispiel behandelt die [Generic Sensor API](https://www.w3.org/TR/generic-sensor/) allgemeine Sensoren, aber spezifischere Belange werden in anderen APIs wie der [Ambient Light Sensor](https://www.w3.org/TR/ambient-light/), [Motion Sensor](https://www.w3.org/TR/motion-sensors/) usw. abgedeckt. In solchen Fällen sind viele der übergeordneten Konzepte dieselben, sodass es keinen Sinn macht, diese über mehrere Einstiegsseiten hinweg zu wiederholen. In einem solchen Fall wäre es in Bezug auf Wiederholung und Auffindbarkeit sinnvoller, sie alle unter einer einzigen „Web-Sensoren“ Einstiegsseite abzudecken.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [API Einstiegsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API Referenzseiten

> [!NOTE]
> Auch bekannt als _Interface Einstiegsseite_.

Eine **API Referenzseite** listet alle Methoden, Eigenschaften, Ereignisse usw. auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind. Es bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird und gibt Links zur Dokumentation für jedes dieser Mitglieder. Es ist detaillierter als eine API Einstiegsseite, die typischerweise auf mehrere API Referenzseiten verweist.

#### Beispiel

- [Request Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [API Referenzseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API Referenzunterseite

Eine **API Referenzunterseite** ist ein Kind einer API Referenzseite. Sie dokumentiert ein einzelnes Mitglied der Schnittstelle im Detail.

#### Beispiele

- [`count()` Methode](/de/docs/Web/API/IDBIndex/count) der [IDBIndex](/de/docs/Web/API/IDBIndex) Schnittstelle (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- [capabilities Eigenschaft](/de/docs/Web/API/VRDisplay/capabilities) der [VRDisplay](/de/docs/Web/API/VRDisplay) Schnittstelle (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- [Request() Konstruktor](/de/docs/Web/API/Request/Request) der [Request](/de/docs/Web/API/Request) Schnittstelle (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- [vrdisplaypresentchange Ereignis](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API), hängt an der [Window](/de/docs/Web/API/Window)) Schnittstelle

#### Vorlagen

- [API Methode Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [API Eigenschaft Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [API Konstruktor Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [API Ereignis Unterseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML Element Referenzseite

Eine **HTML Referenzseite** listet alle Attribute auf, die auf einem HTML-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [`<video>` Element](/de/docs/Web/HTML/Element/video)

#### Vorlagen

- [HTML Element Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### SVG Element Referenzseite

Eine **SVG Referenzseite** listet alle Attribute auf, die auf einem SVG-Element verfügbar sind, erklärt den Zweck und die Nutzung des Elements und bietet Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiel

- [\<g> Element](/de/docs/Web/SVG/Element/g)

#### Vorlagen

- [SVG Element Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS Modul Einstiegsseite

Jedes **[CSS](/de/docs/Web/CSS) Modul** stellt eine CSS-Spezifikation dar, die Unterstützung für bestimmte Funktionen und Implementierungen in CSS bietet. Zum Beispiel stellt das [CSS-Box-Modell](/de/docs/Web/CSS/CSS_box_model) Modul die [Spezifikation](/de/docs/Web/CSS/CSS_box_model#specifications) dar, die die Rand- und Abstands-Eigenschaften beschreibt, die es Ihnen ermöglichen, Abstände in und um ein CSS-Box zu schaffen.

Eine **CSS Modul Einstiegsseite** bietet einen Überblick über die Funktionen, die das Modul bietet, und listet alle Eigenschaften, Datentypen, CSS-Funktionen usw. auf, die das Modul bietet. Wenn möglich, bietet die CSS Modul Einstiegsseite ein schnelles Demonstrationsbeispiel dessen, was durch die Eigenschaften des Moduls erreicht werden kann, durch ein interaktives Beispiel. Die Modul Einstiegsseite dient primär als _Navigations_ seite, funktioniert aber auch als eine schnelle _Referenz_ seite für das Modul.

Einige verwandte Eigenschaften und Funktionen, die in anderen Modulen enthalten sind, aber eng mit der im Modul dokumentierten Funktionalität zusammenhängen, können in einem _Verwandte Konzepte_ Abschnitt behandelt werden. Zum Beispiel sind der `<easing-function>` Datentyp und die `prefers-reduced-motion` Medienabfrage nicht im CSS-Animationsmodul behandelt, aber da sie eng mit CSS-Animationen zusammenhängen, ist es eine gute Idee, sie im [Verwandte Konzepte](/de/docs/Web/CSS/CSS_animations#related_concepts) Abschnitt der CSS-Animations Modul Einstiegsseite hervorzuheben.

#### Beispiele

- [CSS-Animationen](/de/docs/Web/CSS/CSS_animations)
- [CSS-Basisbenutzeroberfläche](/de/docs/Web/CSS/CSS_basic_user_interface)
- [CSS-Filtereffekte](/de/docs/Web/CSS/CSS_filter_effects)
- [CSS-Scroll-Snap](/de/docs/Web/CSS/CSS_scroll_snap)

#### Vorlagen

- [CSS Modul Einstiegsseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template)

### CSS Feature Referenzseite

Eine **CSS Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature, wie z.B. einen Selektor oder eine Eigenschaft, auf und erklärt den Zweck und die Nutzung des Features. Außerdem bietet sie Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Daten.

#### Beispiele

- [`background-color` Eigenschaft](/de/docs/Web/CSS/background-color)
- [`:hover` Pseudoklasse](/de/docs/Web/CSS/:hover)
- [`@media` at-rule](/de/docs/Web/CSS/@media)

#### Vorlagen

- [CSS Eigenschaft Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [CSS Selektor Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [CSS Funktion Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP Header Referenzseite

Eine **HTTP Header Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP Header enthalten kann, und erklärt den Zweck und die Nutzung des Headers. Sie bietet auch Beispiele, Browser-Kompatibilitätsinformationen und andere wichtige Erklärungen.

#### Beispiel

- [Cache-Control Header](/de/docs/Web/HTTP/Headers/Cache-Control)

#### Vorlagen

- [HTTP Header Seitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfaden_ seite, die etwas erklärt oder lehrt. Generell, wenn eine Seite hauptsächlich Prosa enthält und nicht in einen anderen Seitentyp fällt, ist es wahrscheinlich eine konzeptionelle Seite. Eine ausführliche Diskussion über ein Thema könnte über mehrere konzeptionelle Seiten verteilt werden und über [Next](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) und [Previous](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs) Makros verlinkt sein.

#### Beispiele

- [Verwendung der WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualisierungen mit Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts. Der erste Absatz sollte eine einfache, in sich geschlossene Beschreibung des Begriffs sein, die nicht mehr als ein paar Sätze umfasst. Dies kann durch Links zu weiterführenden Informationen im **Siehe auch** Abschnitt ergänzt werden. Wenn die Seite mehr als einen Bildschirm voll wird, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Siehe [Anleitung zum Schreiben und Verweisen auf einen Eintrag im Glossar](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary) für mehr Details.

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Ausnahme")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Glossarseitenvorlage](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Einstiegsseite

Eine **Einstiegsseite** dient als eine Art Menü für ihre Unterseiten und ist daher primär eine _Navigations_ seite. Ein Einstiegsseitenlayout wird typischerweise für die Hauptseite eines Baums von Seiten zu einem bestimmten Thema verwendet. Es beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu seinen Unterseiten und optional zusätzliches Material, das dem Leser nützlich sein könnte.

Die Liste der Unterseiten kann automatisch mit der [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) Vorlage generiert werden. In komplexeren Fällen kann die Liste jedoch manuell erstellt (und gepflegt) werden müssen.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Webentwicklung lernen](/de/docs/Learn_web_development)
- [Beiträge zu MDN](/de/docs/MDN/Community/Contributing)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Writing_style_guide/Code_style_guide)
