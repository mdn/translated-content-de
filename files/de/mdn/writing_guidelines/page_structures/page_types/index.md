---
title: Seitentypen
slug: MDN/Writing_guidelines/Page_structures/Page_types
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

Auf MDN werden wiederholt verschiedene Arten von Seiten verwendet.
Dieser Artikel beschreibt diese Seitentypen, ihren Zweck und enthält Beispiele für jeden Typ sowie Vorlagen, die Sie beim Erstellen einer neuen Seite verwenden können.

Es gibt drei große Kategorien von Seitentypen auf MDN, wobei einige Seitentypen in mehr als eine Kategorie fallen.

- **Referenzseiten** beschreiben die Details von etwas und sind entsprechend der Struktur des beschriebenen Objekts organisiert.
- **Leitfadenseiten** beschreiben, wie man etwas tut oder verwendet, und sind anhand der Ziele der Lesenden organisiert.
- **Navigationsseiten** dienen hauptsächlich dazu, Links zu anderen Seiten bereitzustellen, üblicherweise zu verwandten Themen.

## Erstellen einer neuen Seite

Das Hinzufügen eines neuen Dokuments ist relativ unkompliziert, insbesondere wenn Sie zunächst eine `index.md`-Datei aus einem ähnlichen Thema kopieren können.
Es gibt einige Dinge zu beachten:

- Dokumente werden in Markdown in einer `index.md`-Datei geschrieben.
- Wenn Sie beispielsweise ein neues Dokument für einen HTTP-Header namens `foo` erstellen, erstellen Sie einen neuen Ordner unter `files/en-us/web/http/reference/headers/foo` und legen die Markdown-Datei in diesem Ordner ab (`files/en-us/web/http/reference/headers/foo/index.md`).
- Die `index.md`-Datei eines Dokuments muss mit Front-Matter beginnen, der den `title`, den `slug` und in den meisten Fällen den `page-type` definiert.
  Es kann hilfreich sein, sich auf den Front-Matter in der `index.md`-Datei eines ähnlichen Dokuments zu beziehen.

## Verwendung der Vorlagen

Beim Erstellen einer neuen Seite können Sie sicherstellen, dass Sie die richtige Seitenstruktur und die richtigen Inhalte verwendet haben, indem Sie sich an einer unserer Seitenvorlagen orientieren — siehe die folgenden Abschnitte.
Den genauen Quellcode jeder Vorlage (falls Sie ihn kopieren möchten) finden Sie, indem Sie dem Link „Source on **GitHub**“ am Ende jeder Vorlage folgen.
Diese Seitenvorlagen ergeben als veröffentlichte Seiten wenig Sinn, aber wenn Sie ihren Quellcode anzeigen, sehen Sie, dass sie viele hilfreiche Kommentare, Platzhalter und Hinweise enthalten, die erläutern, wie die fehlenden Informationen ausgefüllt und Ihre Seite erstellt werden kann.

Oben in jeder Vorlage finden Sie einen Abschnitt mit dem Titel _Remove before publishing_ — dieser enthält Informationen zum Ausfüllen des Seitentitels, des Slugs, des Seitenleistenmenüs und der Tags (also Informationen, die nicht tatsächlich im Textkörper des Artikels erscheinen).
Sie müssen diesen Abschnitt löschen, nachdem Sie die darin enthaltenen Anweisungen befolgt haben, bevor die Seite als fertig betrachtet werden kann.

## Seitendesigns im alten Stil

Manchmal stoßen Sie auf Referenzseiten im alten Stil, die sich deutlich von den hier vorgestellten Vorlagen unterscheiden.
Beispielsweise enthielten Schnittstellenseiten im alten Stil alle Details zu den Mitgliedern der Schnittstelle auf einer einzigen Seite, und einzelne Seiten für Methoden, Eigenschaften, Konstruktoren oder Event-Listener existierten nicht.

Wenn Sie auf eine Gruppe von Seiten im alten Stil stoßen, würden wir uns freuen, wenn Sie sie auf den neuen Stil aktualisieren!
Wir wissen jedoch, dass dies mit einem großen Arbeitsaufwand verbunden sein kann.
Wenn die zu aktualisierenden Informationen nicht zu umfangreich sind und Sie etwas Zeit haben, versuchen Sie bitte, sie auf den neuen Stil zu aktualisieren.

Wenn der Arbeitsaufwand größer ist, sollten Sie bei der Priorisierung der Arbeit einige Faktoren berücksichtigen:

- Wie veraltet sind die Informationen?
- Wie minderwertig sind die Informationen?
- Wie beliebt ist das Feature? Wie sehr werden die Informationen gesucht?

Wenn Sie ein Team für die Aktualisierung zusammenstellen möchten oder einfach Inhalte melden oder besprechen möchten, die aktualisiert werden müssen, können Sie gerne [ein Content-Issue erstellen](https://github.com/mdn/content/issues) oder [uns um Hilfe bitten](/de/docs/MDN/Community/Communication_channels).

## Der Front-Matter-Schlüssel page-type

Wir haben einen Front-Matter-Schlüssel `page-type` definiert, um den Typ von MDN-Seiten eindeutig zu identifizieren. Die unten verlinkten Vorlagen geben an, welche `page-type`-Werte Sie für jeden Seitentyp festlegen sollten.

Die vollständige Liste der Seitentypen finden Sie unter [Der Front-Matter-Schlüssel page-type](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key).

## Seitenvorlagen

Nachfolgend finden Sie Beispiele für die verschiedenen Seiten auf MDN sowie Vorlagen, die zum Erstellen neuer Inhalte basierend auf dem Typ der Inhalte verwendet werden können, die Sie präsentieren werden, einschließlich der folgenden Seiten:

- [API-Landingpage](#api-landingpage)
- [API-Referenzseite](#api-referenzseite)
- [API-Referenzunterseite](#api-referenzunterseite)
- [HTML-Element-Referenzseite](#html-element-referenzseite)
- [HTML-Attribut-Referenzseite](#html-attribut-referenzseite)
- [SVG-Element-Referenzseite](#svg-element-referenzseite)
- [CSS-Modulseite](#css-modulseite)
- [CSS-Feature-Referenzseite](#css-feature-referenzseite)
- [HTTP-Header-Referenzseite](#http-header-referenzseite)
- [ARIA-Referenzseite](#aria-referenzseite)
- [Konzeptionelle Seite](#konzeptionelle_seite)
- [Glossarseite](#glossarseite)
- [JavaScript-Klasse](#javascript-klassenseite)
- [JavaScript-Konstruktor](#javascript-konstruktorseite)
- [JavaScript-Fehler](#javascript-fehlerseite)
- [JavaScript-Funktion](#javascript-funktionsseite)
- [JavaScript-globale Eigenschaft](#javascript-seite_für_globale_eigenschaften)
- [JavaScript-Instanz-Accessor-Eigenschaft](#javascript-seite_für_instanz-accessor-eigenschaften)
- [JavaScript-Instanz-Dateneigenschaft](#javascript-seite_für_instanz-dateneigenschaften)
- [JavaScript-Instanzmethode](#javascript-instanzmethodenseite)
- [JavaScript-Namespace](#javascript-namespace-seite)
- [JavaScript-Operator](#javascript-operatorseite)
- [JavaScript-Anweisung](#javascript-anweisungsseite)
- [JavaScript-statische Accessor-Eigenschaft](#javascript-seite_für_statische_accessor-eigenschaften)
- [JavaScript-statische Dateneigenschaft](#javascript-seite_für_statische_dateneigenschaften)
- [JavaScript-statische Methode](#javascript-seite_für_statische_methoden)
- [Landingpage](#landingpage)
- [Seiten zu „Learn web development“](#seiten_zu_„learn_web_development“)

Jeder Abschnitt enthält Links zu Live-Beispielseiten für diesen Seitentyp.

### API-Landingpage

Eine **{{Glossary("API", "API")}}-Landingpage** bietet einen Überblick darüber, was eine bestimmte API leistet, sowie Links zur Dokumentation für jede der von der API angebotenen Schnittstellen, Globals, Funktionen usw.
Sie verlinkt nicht direkt auf bestimmte Methoden oder Eigenschaften innerhalb der Klassen der API, außer im Kontext des Überblickstextes.
Sie ist hauptsächlich eine _Navigationsseite_, fungiert aber auch als _Referenzseite_ für einen schnellen Überblick über die API.

Es gibt Fälle, in denen mehrere eigenständige APIs existieren, die in eigenen Spezifikationen definiert sind, jedoch eng miteinander verbunden sind und daher sinnvoll auf einer einzigen API-Landingpage behandelt werden könnten.
Beispielsweise deckt die [Generic Sensor API](https://w3c.github.io/sensors/) allgemeine Belange von Sensoren ab, während spezifischere Aspekte in anderen APIs wie [Ambient Light Sensor](https://w3c.github.io/ambient-light/), [Motion Sensor](https://w3c.github.io/motion-sensors/) usw. behandelt werden.
In solchen Fällen sind viele übergeordnete Konzepte gleich, weshalb es keinen Sinn ergibt, sie auf mehreren Landingpages zu wiederholen.
In einem solchen Fall wäre es im Hinblick auf Wiederholungen und Auffindbarkeit sinnvoller, sie alle unter einer einzigen Landingpage „Web sensors“ zu behandeln.

#### Beispiel

- [WebVR API](/de/docs/Web/API/WebVR_API)

#### Vorlagen

- [Vorlage für API-Landingpages](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template)

### API-Referenzseite

> [!NOTE]
> Auch als _Interface-Landingpage_ bekannt.

Eine **API-Referenzseite** listet alle Methoden, Eigenschaften, Events und so weiter auf, die Mitglieder einer bestimmten Schnittstelle oder Klasse sind.
Sie bietet einen Überblick darüber, was die Klasse oder Schnittstelle tut oder wofür sie verwendet wird, und enthält Links zur Dokumentation für jedes dieser Mitglieder.
Sie ist detaillierter als eine API-Landingpage, die normalerweise auf mehrere API-Referenzseiten verlinkt.

#### Beispiel

- Die [Request-Schnittstelle](/de/docs/Web/API/Request) der [Fetch API](/de/docs/Web/API/Fetch_API).

#### Vorlagen

- [Vorlage für API-Referenzseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template)

### API-Referenzunterseite

Eine **API-Referenzunterseite** ist ein Kind einer API-Referenzseite.
Sie dokumentiert ein einzelnes Schnittstellenmitglied im Detail.

#### Beispiele

- Die Methode [`count()`](/de/docs/Web/API/IDBIndex/count) der Schnittstelle [IDBIndex](/de/docs/Web/API/IDBIndex) (Teil der [IndexedDB API](/de/docs/Web/API/IndexedDB_API))
- Die Eigenschaft [capabilities](/de/docs/Web/API/VRDisplay/capabilities) der Schnittstelle [VRDisplay](/de/docs/Web/API/VRDisplay) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API))
- Der Konstruktor [Request()](/de/docs/Web/API/Request/Request) der Schnittstelle [Request](/de/docs/Web/API/Request) (Teil der [Fetch API](/de/docs/Web/API/Fetch_API))
- Das Event [vrdisplaypresentchange](/de/docs/Web/API/Window/vrdisplaypresentchange_event) (Teil der [WebVR API](/de/docs/Web/API/WebVR_API)), das an die Schnittstelle [Window](/de/docs/Web/API/Window) angehängt ist

#### Vorlagen

- [Vorlage für API-Methodenunterseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template)
- [Vorlage für API-Eigenschaftenunterseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template)
- [Vorlage für API-Konstruktorunterseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template)
- [Vorlage für API-Eventunterseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template)

### HTML-Element-Referenzseite

Eine **HTML-Referenzseite** listet alle Attribute auf, die für ein HTML-Element verfügbar sind, erläutert Zweck und Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und weitere wichtige Daten.

#### Beispiel

- Das Element [`<video>`](/de/docs/Web/HTML/Reference/Elements/video)

#### Vorlagen

- [Vorlage für HTML-Elementseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template)

### HTML-Attribut-Referenzseite

Eine HTML-Attributseite listet alle Werte auf, die für ein HTML-Attribut existieren, erläutert Zweck und Anwendungsfälle des Attributs und bietet Beispiele, Informationen zur Browser-Kompatibilität und weitere wichtige Daten.

> [!NOTE]
> Elementspezifische Attribute (z. B. `placeholder` für `<input>`) benötigen keine separate Seite, wenn die Attribute innerhalb der Referenzseite des übergeordneten Elements ausreichend behandelt werden können (z. B. sollte das Attribut `placeholder` auf der Seite des Elements `<input>` behandelt werden, nicht als eigenständige Seite).

#### Beispiel

- Das Attribut [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)

#### Vorlagen

- [Vorlage für HTML-Attributseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template)

### SVG-Element-Referenzseite

Eine **SVG-Referenzseite** listet alle Attribute auf, die für ein SVG-Element verfügbar sind, erläutert Zweck und Verwendung des Elements und bietet Beispiele, Informationen zur Browser-Kompatibilität und weitere wichtige Daten.

#### Beispiel

- Das Element [\<g>](/de/docs/Web/SVG/Reference/Element/g)

#### Vorlagen

- [Vorlage für SVG-Elementseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template)

### CSS-Modulseite

Jedes **[CSS](/de/docs/Web/CSS)-Modul** repräsentiert eine CSS-Spezifikation, die Unterstützung für bestimmte Features und Implementierungen in CSS bereitstellt. Beispielsweise repräsentiert das Modul [CSS box model](/de/docs/Web/CSS/Guides/Box_model) die [Spezifikation](/de/docs/Web/CSS/Guides/Box_model#specifications), welche die Eigenschaften `margin` und `padding` beschreibt, mit denen Sie Abstände in und um eine CSS-Box erstellen können.

Eine **CSS-Modulseite** bietet einen Überblick über die Features des Moduls und listet alle vom Modul angebotenen Eigenschaften, Datentypen, CSS-Funktionen usw. auf. Wenn möglich, bietet die CSS-Modulseite durch ein interaktives Beispiel eine schnelle Demonstration dessen, was mit den Eigenschaften des Moduls erreicht werden kann.
Die Modulseite dient hauptsächlich als _Navigationsseite_, fungiert aber auch als _Referenzseite_ für einen schnellen Überblick über das Modul.

Einige verwandte Eigenschaften und Features, die zu anderen Modulen gehören, aber eng mit der Funktionalität des von Ihnen dokumentierten Moduls verbunden sind, können auch in einem Abschnitt _Related concepts_ behandelt werden.
Der Datentyp `<easing-function>` und die Media Query `prefers-reduced-motion` werden beispielsweise nicht im CSS-Animationsmodul behandelt. Da sie jedoch eng mit CSS-Animationen verbunden sind, ist es sinnvoll, sie im Abschnitt [Related concepts](/de/docs/Web/CSS/Guides/Animations#related_concepts) der Seite des CSS-Animationsmoduls hervorzuheben.

#### Beispiele

- [CSS animations](/de/docs/Web/CSS/Guides/Animations)
- [CSS basic user interface](/de/docs/Web/CSS/Guides/Basic_user_interface)
- [CSS filter effects](/de/docs/Web/CSS/Guides/Filter_effects)
- [CSS scroll snap](/de/docs/Web/CSS/Guides/Scroll_snap)

#### Vorlagen

- [Vorlage für CSS-Modulseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template)

### CSS-Feature-Referenzseite

Eine **CSS-Referenzseite** listet alle verfügbaren Syntaxen für ein CSS-Feature wie einen Selektor oder eine Eigenschaft auf und erläutert Zweck und Verwendung des Features. Sie bietet außerdem Beispiele, Informationen zur Browser-Kompatibilität und weitere wichtige Daten.

#### Beispiele

- Eigenschaft {{cssxref("background-color")}}
- Pseudoklasse {{cssxref(":hover")}}
- At-Regel {{cssxref("@media")}}

#### Vorlagen

- [Vorlage für CSS-Eigenschaftsseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template)
- [Vorlage für CSS-Selektorseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template)
- [Vorlage für CSS-Funktionsseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template)

### HTTP-Header-Referenzseite

Eine **HTTP-Header-Referenzseite** listet alle verfügbaren Direktiven auf, die ein HTTP-Header enthalten kann, und erläutert Zweck und Verwendung des Headers.
Sie bietet außerdem Beispiele, Informationen zur Browser-Kompatibilität und weitere wichtige Erklärungen.

#### Beispiel

- Header [Cache-Control](/de/docs/Web/HTTP/Reference/Headers/Cache-Control)

#### Vorlagen

- [Vorlage für HTTP-Headerseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template)

### ARIA-Referenzseite

Eine **ARIA-Referenzseite** beschreibt eine [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles) oder ein [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), die bzw. das Wege definiert, Webinhalte und Webanwendungen für Menschen mit Behinderungen zugänglicher zu machen.

#### Beispiele

- Attribut [`aria-busy`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- Rolle [`application`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/application_role)

#### Vorlagen

- [Vorlage für ARIA-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/ARIA_Page_Template)

### JavaScript-Klassenseite

Eine **JavaScript-Klassenseite** bietet einen Überblick über eine JavaScript-Klasse, einschließlich ihres Zwecks und ihrer Verwendung, und listet alle statischen Methoden und Eigenschaften sowie Instanzmethoden und -eigenschaften der Klasse auf. Eine JavaScript-Klasse wird als intrinsisches Funktionsobjekt mit einer `prototype`-Eigenschaft definiert, die von allen Instanzen der Klasse gemeinsam verwendet wird. Nach dieser Definition ist `BigInt` ebenfalls eine Klasse, obwohl es nicht mit `new` aufgerufen werden kann.

#### Beispiele

- [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [`BigInt`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [`Map`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Intl.Collator`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator)
- [`Temporal.ZonedDateTime`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime)

#### Vorlagen

- [Vorlage für JavaScript-Klassenseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_class_page_template)

### JavaScript-Konstruktorseite

Eine **JavaScript-Konstruktorseite** bietet Informationen über den Konstruktor einer JavaScript-Klasse. Sie enthält Informationen darüber, wie er aufgerufen werden sollte. Der Konstruktor einer Klasse wird lediglich als das Funktionsobjekt selbst definiert: Beispielsweise ist `BigInt()` ein Konstruktor, obwohl es nicht mit `new` aufgerufen werden kann. Nicht jede Klasse hat einen dokumentationswürdigen Konstruktor: Die Klasse {{jsxref("TypedArray")}} ist beispielsweise eine abstrakte Klasse, die beim Aufruf immer einen Fehler auslöst und daher keine eigene Seite hat.

#### Beispiele

- [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
- [`BigInt()`](/de/docs/Web/JavaScript/Reference/Global_Objects/BigInt/BigInt)
- [`Map()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
- [`Intl.Collator()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator)
- [`Temporal.ZonedDateTime()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/ZonedDateTime)

#### Vorlagen

- [Vorlage für JavaScript-Konstruktorseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_constructor_page_template)

### JavaScript-Fehlerseite

Eine **JavaScript-Fehlerseite** bietet Informationen darüber, wann ein JavaScript-Fehler auftritt und wie er behoben werden kann. Sie ist in erster Linie zur Verwendung durch Entwicklertools als Referenz vorgesehen. Diese Fehlerreferenzen sind hauptsächlich nach den Fehlermeldungen von Firefox gegliedert — eine Fehlermeldung pro Seite. Siehe auch den Leitfaden [How to document errors](/de/docs/MDN/Writing_guidelines/Howto/Document_web_errors).

#### Beispiele

- [ReferenceError: „x“ is not defined](/de/docs/Web/JavaScript/Reference/Errors/Not_defined)

#### Vorlagen

- [Vorlage für JavaScript-Fehlerseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_error_page_template)

### JavaScript-Funktionsseite

Eine **JavaScript-Funktionsseite** bietet Informationen über eine JavaScript-Funktion, die keiner Klasse oder keinem Namespace zugeordnet ist. Sie enthält Informationen über Zweck, Parameter und Rückgabewert der Funktion.

Wenn die Funktion statisch für eine Klasse oder einen Namespace verfügbar ist, verwenden Sie stattdessen die Vorlage [JavaScript-statische Methode](#javascript-seite_für_statische_methoden). Wenn die Funktion als Klasse betrachtet werden kann (weil sie eine `prototype`-Eigenschaft hat), verwenden Sie stattdessen die Vorlage [JavaScript-Klasse](#javascript-klassenseite). Der wichtigste Hinweis für die Verwendung der Vorlage für globale Funktionsseiten ist, dass die Eigenschaft einen Funktionswert hat und mit einem Kleinbuchstaben beginnt.

#### Beispiele

- [`eval()`](/de/docs/Web/JavaScript/Reference/Global_Objects/eval)
- [`encodeURIComponent()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

#### Vorlagen

- [Vorlage für JavaScript-Funktionsseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_function_page_template)

### JavaScript-Seite für globale Eigenschaften

Eine **JavaScript-Seite für globale Eigenschaften** bietet Informationen über eine globale JavaScript-Eigenschaft, die keiner Klasse oder keinem Namespace zugeordnet ist. Sie enthält Informationen über Zweck und Verwendung der Eigenschaft.

Wenn die Eigenschaft statisch für eine Klasse oder einen Namespace verfügbar ist, verwenden Sie stattdessen die Vorlage [JavaScript-statische Dateneigenschaft](#javascript-seite_für_statische_dateneigenschaften). Wenn die Eigenschaft eine Funktion ist, verwenden Sie stattdessen die Vorlage [JavaScript-Funktion](#javascript-funktionsseite). Wenn die Eigenschaft ein einfaches Objekt ist, dessen Hauptzweck darin besteht, andere Eigenschaften zu beherbergen, verwenden Sie stattdessen die Vorlage [JavaScript-Namespace](#javascript-namespace-seite). Der wichtigste Hinweis für die Verwendung der Vorlage für globale Eigenschaftsseiten ist, dass die Eigenschaft entweder einen primitiven Wert hat oder mit einem Kleinbuchstaben beginnt und keine Funktion ist.

#### Beispiele

- [`Infinity`](/de/docs/Web/JavaScript/Reference/Global_Objects/Infinity)
- [`globalThis`](/de/docs/Web/JavaScript/Reference/Global_Objects/globalThis)

#### Vorlagen

- [Vorlage für Seiten globaler JavaScript-Eigenschaften](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_global_property_page_template)

### JavaScript-Seite für Instanz-Accessor-Eigenschaften

Eine **JavaScript-Seite für Instanz-Accessor-Eigenschaften** bietet Informationen über eine Accessor-Eigenschaft einer JavaScript-Klasseninstanz. Eine Accessor-Eigenschaft besteht aus einem Getter und manchmal einem Setter und wird fast immer auf dem Prototype der Instanz definiert. Die Spezifikation verwendet die Syntax `get Constructor.prototype.propertyName`, um eine Accessor-Eigenschaft zu definieren. Fast alle nicht veralteten Instanz-Accessor-Eigenschaften in der JavaScript-Kernsprache bestehen nur aus Gettern, wodurch sie schreibgeschützt sind.

Wenn die Eigenschaft einen Funktionswert hat, verwenden Sie stattdessen die Vorlage [JavaScript-Instanzmethode](#javascript-instanzmethodenseite).

#### Beispiele

- [`Map.prototype.size`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/size)

#### Vorlagen

- [Vorlage für Seiten von JavaScript-Instanz-Accessor-Eigenschaften](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_accessor_property_page_template)

### JavaScript-Seite für Instanz-Dateneigenschaften

Eine **JavaScript-Seite für Instanz-Dateneigenschaften** bietet Informationen über eine Dateneigenschaft einer JavaScript-Klasseninstanz. Eine Dateneigenschaft besteht aus einem Wert und einem Schreibbarkeits-Flag und kann entweder auf dem Prototype der Instanz oder direkt auf der Instanz selbst definiert sein.

Jede Instanz hat eine Dateneigenschaft namens [`constructor`](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor), die auf die Konstruktorfunktion verweist, welche die Instanz erstellt hat. Diese Dateneigenschaft wird auf der Hauptseite der Klasse erwähnt, aber nicht auf einer separaten Seite für jede Klasse dokumentiert.

Wenn die Eigenschaft einen Funktionswert hat, verwenden Sie stattdessen die Vorlage [JavaScript-Instanzmethode](#javascript-instanzmethodenseite).

#### Beispiele

- [`Array`: `length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [`Error.prototype.name`](/de/docs/Web/JavaScript/Reference/Global_Objects/Error/name)

#### Vorlagen

- [Vorlage für Seiten von JavaScript-Instanz-Dateneigenschaften](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_data_property_page_template)

### JavaScript-Instanzmethodenseite

Eine **JavaScript-Instanzmethodenseite** bietet Informationen über eine Methode einer JavaScript-Klasseninstanz. Eine Methode ist eine Funktionseigenschaft der Instanz. Im Allgemeinen ist eine Methode eine auf dem Prototype der Instanz definierte Dateneigenschaft, aber es gibt einige ältere Ausnahmen, etwa [`Intl.DateTimeFormat.prototype.format()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format), das eine Accessor-Eigenschaft ist, die eine gebundene Funktion zurückgibt. Um die Vertrautheit für Lesende zu wahren, behandeln wir sie als normale Methoden.

#### Beispiele

- [`Array.prototype.push()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [`Intl.DateTimeFormat.prototype.resolvedOptions()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions)

#### Vorlagen

- [Vorlage für JavaScript-Instanzmethodenseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_instance_method_page_template)

### JavaScript-Namespace-Seite

Eine **JavaScript-Namespace-Seite** bietet einen Überblick über einen JavaScript-Namespace, einschließlich seines Zwecks und seiner Verwendung, und listet alle Methoden und Eigenschaften des Namespace auf. Ein JavaScript-Namespace wird als einfaches Objekt definiert, das andere Eigenschaften beherbergt.

#### Beispiele

- [`Intl`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl)
- [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [`Temporal`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal)
- [`Temporal.Now`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now)

#### Vorlagen

- [Vorlage für JavaScript-Namespace-Seiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_namespace_page_template)

### JavaScript-Operatorseite

Eine **JavaScript-Operatorseite** bietet Informationen über einen JavaScript-Operator, einschließlich seines Zwecks und seiner Verwendung. Ein _Operator_ ist kein universell einheitlich definierter Begriff. Für MDN definieren wir ihn als eine Syntax, die durch einen oder mehrere Operanden parametrisiert wird, üblicherweise in Form von Ausdrücken oder ausdrucksähnlichen Konstrukten.

#### Beispiele

- [Addition (`+`)](/de/docs/Web/JavaScript/Reference/Operators/Addition)
- [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)
- [`class`](/de/docs/Web/JavaScript/Reference/Operators/class)

#### Vorlagen

- [Vorlage für JavaScript-Operatorseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_operator_page_template)

### JavaScript-Anweisungsseite

Eine **JavaScript-Anweisungsseite** bietet Informationen über eine JavaScript-Anweisung oder -Deklaration, einschließlich ihres Zwecks, ihrer Syntax und ihrer Verwendung. Sie beschreibt die Syntaxkomponenten der Anweisung sowie, wie sie die Programmausführung beeinflusst oder Bindungen einführt.

Verwenden Sie für Ausdrucksformen wie einen Funktionsausdruck oder einen Klassenausdruck stattdessen die Vorlage [JavaScript-Operatorseite](#javascript-operatorseite).

#### Beispiele

- [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else)
- [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)
- [`const`](/de/docs/Web/JavaScript/Reference/Statements/const)

#### Vorlagen

- [Vorlage für JavaScript-Anweisungsseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_statement_page_template)

### JavaScript-Seite für statische Accessor-Eigenschaften

Eine **JavaScript-Seite für statische Accessor-Eigenschaften** bietet Informationen über eine Accessor-Eigenschaft, auf die direkt über eine JavaScript-Klasse oder einen Namespace zugegriffen wird. Sie beschreibt den vom Getter zurückgegebenen Wert und, wenn ein Setter vorhanden ist, die Werte, die er akzeptiert, sowie die Auswirkung einer Zuweisung.

Verwenden Sie für eine Accessor-Eigenschaft einer Instanz stattdessen die Vorlage [JavaScript-Instanz-Accessor-Eigenschaft](#javascript-seite_für_instanz-accessor-eigenschaften).

#### Beispiele

- [`Array[Symbol.species]`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.species)
- [`RegExp.input`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input)

#### Vorlagen

- [Vorlage für Seiten von JavaScript-statischen Accessor-Eigenschaften](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_accessor_property_page_template)

### JavaScript-Seite für statische Dateneigenschaften

Eine **JavaScript-Seite für statische Dateneigenschaften** bietet Informationen über eine Dateneigenschaft, auf die direkt über eine JavaScript-Klasse oder einen Namespace zugegriffen wird. Sie beschreibt Wert, Attribute, Zweck und Verwendung der Eigenschaft.

Wenn die Eigenschaft eine Accessor-Eigenschaft ist, verwenden Sie stattdessen die Vorlage [JavaScript-statische Accessor-Eigenschaft](#javascript-seite_für_statische_accessor-eigenschaften). Wenn die Eigenschaft einen Funktionswert hat, verwenden Sie stattdessen die Vorlage [JavaScript-statische Methode](#javascript-seite_für_statische_methoden). Als Eigenschaften bereitgestellte Klassen und Namespaces haben eigene [Klassenseiten](#javascript-klassenseite) oder [Namespace-Seiten](#javascript-namespace-seite).

#### Beispiele

- [`Math.PI`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
- [`Number.MAX_SAFE_INTEGER`](/de/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

#### Vorlagen

- [Vorlage für Seiten von JavaScript-statischen Dateneigenschaften](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_data_property_page_template)

### JavaScript-Seite für statische Methoden

Eine **JavaScript-Seite für statische Methoden** bietet Informationen über eine Methode, die direkt über eine JavaScript-Klasse oder einen Namespace aufgerufen wird. Sie beschreibt Zweck, Syntax, Parameter, Rückgabewert und Ausnahmen der Methode.

Verwenden Sie für eine Methode einer Instanz stattdessen die Vorlage [JavaScript-Instanzmethode](#javascript-instanzmethodenseite). Verwenden Sie für eine globale Funktion stattdessen die Vorlage [JavaScript-Funktion](#javascript-funktionsseite).

#### Beispiele

- [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from)
- [`Temporal.Now.instant()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/instant)

#### Vorlagen

- [Vorlage für JavaScript-Seiten für statische Methoden](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/JavaScript_static_method_page_template)

### Konzeptionelle Seite

Eine **konzeptionelle Seite** ist eine _Leitfadenseite_, die etwas erklärt oder vermittelt.
Im Allgemeinen ist eine Seite, die hauptsächlich Fließtext enthält und keinem anderen Seitentyp entspricht, wahrscheinlich eine konzeptionelle Seite.
Eine ausführliche Behandlung eines Themas kann sich über mehrere konzeptionelle Seiten erstrecken und mit den Makros [Next](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) und [Previous](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) verknüpft werden.

#### Beispiele

- [Using the WebVR API](/de/docs/Web/API/WebVR_API/Using_the_WebVR_API)
- [Visualizations with Web Audio API](/de/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
- [Handling conflicts](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)

### Glossarseite

Eine **Glossarseite** enthält eine kurze Erklärung eines Begriffs, Themas oder Konzepts.
Der erste Absatz sollte eine einfache, eigenständige Beschreibung des Begriffs sein und nicht mehr als ein paar Sätze umfassen.
Darauf können im Abschnitt **See also** Links zu weiterführenden Informationen folgen.
Wenn die Seite auf mehr als etwa eine Bildschirmseite anwächst, ist sie zu lang und sollte in eine konzeptionelle Seite umgewandelt werden. Weitere Details finden Sie unter [How to write and reference an entry in the glossary](/de/docs/MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary).

#### Beispiele

- {{Glossary("DOM", "DOM")}}
- {{Glossary("Exception", "Exception")}}
- {{Glossary("Hyperlink", "Hyperlink")}}

#### Vorlagen

- [Vorlage für Glossarseiten](/de/docs/MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template)

### Landingpage

Eine **Landingpage** dient gewissermaßen als Menü für ihre Unterseiten und ist daher hauptsächlich eine _Navigationsseite_.
Ein Landingpage-Layout wird typischerweise für die Stammseite eines Seitenbaums zu einem bestimmten Thema verwendet.
Sie beginnt mit einer kurzen Zusammenfassung des Themas und präsentiert dann eine strukturierte Liste von Links zu ihren Unterseiten sowie optional zusätzliches Material, das für Lesende nützlich sein kann.

Die Liste der Unterseiten kann automatisch mithilfe der Vorlage [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) generiert werden. In komplexeren Fällen muss die Liste jedoch möglicherweise manuell erstellt und gepflegt werden.

### Seiten zu „Learn web development“

Der Bereich [Learn web development](/de/docs/Learn_web_development) von MDN richtet sich speziell an Menschen, die die grundlegenden Grundlagen der Webentwicklung erlernen, und erfordert daher einen anderen Ansatz als die übrigen Inhalte von MDN. Weitere Richtlinien finden Sie unter [Learn web development writing guidelines](/de/docs/MDN/Writing_guidelines/Learning_content).

Innerhalb von „Learn web development“ gibt es nur wenige Seitentypen:

- **Landingpage einer Modulgruppe**, beispielsweise [Core learning modules](/de/docs/Learn_web_development/Core)
  - : Diese enthalten einen einleitenden Absatz, einen Abschnitt mit den Voraussetzungen, die Sie vor Beginn der Modulgruppe erfüllen sollten, und eine Liste der Module, gefolgt von einer optionalen Liste mit „See also“-Links.
- **Modul-Landingpage**, beispielsweise [Structuring content with HTML](/de/docs/Learn_web_development/Core/Structuring_content)
  - : Diese enthalten einen einleitenden Absatz, einen Abschnitt mit den Voraussetzungen, die Sie vor Beginn des Moduls erfüllen sollten, und eine Liste der enthaltenen Tutorials, gefolgt von einer optionalen Liste „Additional tutorials“, die zwar verwandt sind, aber nicht zum zentralen Lernpfad gehören, sowie einer optionalen Liste mit „See also“-Links.
- **Tutorialseite**, beispielsweise [Basic HTML syntax](/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Die Struktur eines Learn-Tutorials ist nicht streng vorgegeben, muss aber eine praxisorientierte Lernerfahrung bieten (siehe [Learn web development writing guidelines > Approach](/de/docs/MDN/Writing_guidelines/Learning_content#approach)), am Anfang eine Liste mit „Prerequisites“ und „Learning outcomes“ enthalten, und der Inhalt muss die angegebenen Lernergebnisse vermitteln.

### Beispiele

- [HTML](/de/docs/Web/HTML)
- [CSS](/de/docs/Web/CSS)
- [Web APIs](/de/docs/Web/API)
- [JavaScript](/de/docs/Web/JavaScript)
- [Learn web development](/de/docs/Learn_web_development)
- [Community resources](/de/docs/MDN/Community)

## Siehe auch

- [Seitenkomponenten](/de/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
- [Erstellen von Codebeispielen in Markdown](/de/docs/MDN/Writing_guidelines/Code_style_guide)
