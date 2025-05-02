---
title: Der `page-type` Front-Matter-Schlüssel
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

Der `page-type` Front-Matter-Schlüssel beschreibt den Typ einer MDN-Seite. Dies ermöglicht es MDN-Inhaltstools, die Inhaltsprüfung und die Organisation der Seitenleiste besser zu automatisieren.

Wie jeder andere Front-Matter-Schlüssel wird der `page-type`-Schlüssel im YAML am Anfang von "index.md" angegeben:

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: httpsidebar
---
```

Jeder Hauptbereich der Seite — JavaScript, CSS usw. — hat eine Reihe bereichsspezifischer `page-type`-Werte, und es gibt auch eine Reihe generischer Werte, die in jedem Bereich der Seite erscheinen können.

## Generische Seitentypen

Diese Seitentypen sind nicht spezifisch für einen bestimmten MDN-Technologiebereich:

- `guide`: ein generischer Leitfaden ohne spezifische Struktur.
- `landing-page`: eine Übersicht über das Thema, eine Einführung in den Abschnitt und Navigation zu Schlüsselbereichen.
- `listing-page`: eine kurze Beschreibung des Abschnitts und eine Liste von Unterseiten innerhalb dieses Abschnitts.
- `how-to`: ein zielgerichteter Anleitung-Artikel.
- `tutorial`: eine Übersicht über einen lernorientierten Artikel.
- `tutorial-chapter`: ein Teil eines mehrteiligen Tutorials.

## Bereichsspezifische Seitentypen

Dieser Abschnitt listet Seitentypen auf, die spezifisch für einen bestimmten Bereich von MDN sind.

### Seitentypen des Lernbereichs

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Learn](/de/docs/Learn_web_development) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen-Werte sein.

- `learn-topic`: eine Übersicht über ein Thema, also eine Sammlung von Modulen wie [_CSS_](/de/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: eine Übersicht über ein Modul, also eine geordnete Sammlung von Leitfäden, wie [_Structuring content with HTML_](/de/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: ein Leitfaden, der Teil eines Moduls ist, wie [_Mobile accessibility_](/de/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: ein spezieller Leitfaden mit einer Aktivität zur Bewertung des Verständnisses eines Moduls oder eines Teils davon, wie [_Test your skills: basic controls_](/de/docs/Learn_web_development/Extensions/Forms/Test_your_skills/Basic_controls).
- `learn-faq`: die Antwort auf eine spezifische Frage zur Webentwicklung, wie [_What is a domain name?_](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Seitentypen der Barrierefreiheit

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Accessibility](/de/docs/Web/Accessibility) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `aria-role`: eine ARIA [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), wie [`section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: ein ARIA [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), wie [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### Seitentypen von CSS

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/CSS](/de/docs/Web/CSS) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `css-at-rule`: eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), wie {{cssxref("@media")}}.
- `css-at-rule-descriptor`: ein At-Regel Deskriptor, wie [`@counter-style/prefix`](/de/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: ein Kombinator, wie der [Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator).
- `css-function`: eine [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions), wie {{cssxref("max")}}.
- `css-keyword`: ein Schlüsselwort, wie {{cssxref("inherit")}}.
- `css-media-feature`: eine [Medienfunktion](/de/docs/Web/CSS/@media#media_features), wie [`hover`](/de/docs/Web/CSS/@media/hover).
- `css-module`: ein Modul, wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations).
- `css-property`: eine Eigenschaft, wie {{cssxref("background-color")}}.
- `css-pseudo-class`: eine [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), wie {{cssxref(":enabled")}}.
- `css-pseudo-element`: ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), wie {{cssxref("::before")}}.
- `css-selector`: ein [Basis-Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), wie der [Klassen-Selektor](/de/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), wie {{cssxref("background")}}.
- `css-type`: ein [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types), wie [`<color>`](/de/docs/Web/CSS/color_value).

### Glossar-Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Glossar](/de/docs/Glossary) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten Werte sein.

- `glossary-definition`: eine Seite, die einen Begriff definiert, wie {{Glossary("Bezier_curve", "Bézierkurve")}}.
- `glossary-disambiguation`: eine Seite, die Links zu zwei oder mehr Definitionsseiten für einen mehrdeutigen Begriff bereitstellt, wie {{Glossary("Node", "Node")}}.

### Seitentypen von HTML

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/HTML](/de/docs/Web/HTML) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `html-attribute`: ein HTML-Attribut, wie [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`: ein einzelner Wert für ein HTML-Attribut, wie [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`: ein HTML-Element, wie [`<button>`](/de/docs/Web/HTML/Reference/Elements/button).

### Seitentypen von HTTP

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/HTTP](/de/docs/Web/HTTP) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `http-csp-directive`: eine [CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Direktive, wie [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`: ein [CORS](/de/docs/Web/HTTP/Guides/CORS) Fehler, wie [`CORSDidNotSucceed`](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`: eine [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy) Direktive, wie [`accelerometer`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`: ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), wie [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`: eine [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) wie [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`: ein [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), wie [`404`](/de/docs/Web/HTTP/Reference/Status/404).

### Seitentypen von JavaScript

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/JavaScript](/de/docs/Web/JavaScript) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `javascript-class`: eine Definition eines eingebauten Objekts, wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`: ein Objektkonstruktor, wie [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`: ein Fehler, wie [RangeError: invalid array length](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`: eine eingebaute Funktion, die keine Objektmethode ist, wie [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`: eine globale Eigenschaft wie [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`: eine Accessor-Eigenschaft auf einer Objektinstanz, wie [`Map.prototype.size`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`: eine Dateneigenschaft auf einer Objektinstanz, wie die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length) Eigenschaft von `Array`.
- `javascript-instance-method`: eine Methode auf einer Objektinstanz, wie [`Array.prototype.at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`: ein Teil der JavaScript-Syntax, der nicht in eine andere Kategorie passt, wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`: ein Objekt, das nicht instanziiert werden kann und nur statische Mitglieder hat, wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`: ein Operator, wie [Addition (+)](/de/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`: eine Anweisung, wie [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`: eine statische Accessor-Eigenschaft, wie [`RegExp.lastMatch`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`: eine statische Dateneigenschaft, wie [`Math.E`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`: eine statische Methode, wie [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### MathML Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/MathML](/de/docs/Web/MathML) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `mathml-attribute`: ein MathML-Attribut, wie [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`: ein HTML-Element, wie [`<msqrt>`](/de/docs/Web/MathML/Reference/Element/msqrt).

### SVG Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/SVG](/de/docs/Web/SVG) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `svg-attribute`: ein SVG-Attribut, wie [`crossorigin`](/de/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`: ein SVG-Element, wie [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle).

### Web API Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/API](/de/docs/Web/API) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `web-api-overview`: bietet eine Übersicht über eine Web-API, wie die [Fetch API](/de/docs/Web/API/Fetch_API).
- `web-api-interface`: eine Web-API-Schnittstelle, wie [`Request`](/de/docs/Web/API/Request).
- `web-api-constructor`: ein Konstruktor, wie [`Request()`](/de/docs/Web/API/Request/Request).
- `web-api-instance-method`: eine Instanzmethode, wie [`cache.add()`](/de/docs/Web/API/Cache/add).
- `web-api-instance-property`: eine Instanzeigenschaft, wie [`request.headers`](/de/docs/Web/API/Request/headers).
- `web-api-static-method`: eine statische Methode, wie [`Response.error()`](/de/docs/Web/API/Response/error_static).
- `web-api-static-property`: eine statische Eigenschaft, wie [`Notification.permission`](/de/docs/Web/API/Notification/permission_static).
- `web-api-event`: ein Ereignis, wie [`Notification.click`](/de/docs/Web/API/Notification/click_event).
- `webgl-extension`: eine WebGL-Erweiterung, wie [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: eine WebGL-Erweiterungsmethode, wie [`OES_vertex_array_object.bindVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### WebAssembly Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [WebAssembly/](/de/docs/WebAssembly) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen Werte sein.

- `webassembly-function`: eine globale Funktion, also eine Methode direkt unter dem `WebAssembly`-Objekt, das als Namensraum fungiert, wie [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`: ein Konstruktor, wie [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`: eine WebAssembly-Schnittstelle, wie [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`: eine Instanzeigenschaft, wie [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`: eine Instanzmethode, wie [`WebAssembly.Exception.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`: eine statische Methode, wie [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`: eine Anweisung oder eine Reihe von Anweisungen, wie [`Wrap`](/de/docs/WebAssembly/Reference/Numeric/Wrap).

### WebDriver Seitentypen

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/WebDriver](/de/docs/Web/WebDriver) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `webdriver-command`: ein WebDriver-Befehl, wie [`CloseWindow`](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow).
- `webdriver-capability`: eine WebDriver-Fähigkeit, wie [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`: ein WebDriver-Fehler, wie [Insecure certificate](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### Seitentypen von WebExtensions

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Mozilla/Add-ons/WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `webextension-api`: eine WebExtension-API, wie [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`: ein WebExtension-API-Ereignis, wie [`action.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`: eine WebExtension-Funktion, wie [`action.setBadgeText()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`: eine WebExtension-Eigenschaft, wie [`browserSettings.openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`: ein WebExtension-Typ, wie [`contextualIdentities.ContextualIdentity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`: ein WebExtension-Manifestschlüssel, wie [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Seitentypen des Web-Manifests

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Manifest](/de/docs/Web/Progressive_web_apps/Manifest) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `web-manifest-member`: ein Mitglied eines Manifests, wie [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### Seitentypen von XPath

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/XPath](/de/docs/Web/XML/XPath) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `xpath-function`: eine Funktion, wie [`ceiling()`](/de/docs/Web/XML/XPath/Reference/Functions/ceiling)

### Seitentypen von XSLT

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/XSLT](/de/docs/Web/XML/XSLT) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `xslt-element`: ein Element von XSLT, wie [`<xsl:message>`](/de/docs/Web/XML/XSLT/Reference/Element/message).

### Seitentypen von EXSLT

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/EXSLT](/de/docs/Web/XML/EXSLT) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `xslt-function`: eine Funktion von EXSLT, wie [`exsl:node-set()`](/de/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Seitentypen von Firefox

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Mozilla/Firefox](/de/docs/Mozilla/Firefox) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und ihr Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) Werte sein.

- `firefox-release-notes`: die Versionshinweise für eine bestimmte Firefox-Version, wie [_Firefox 115 for developers_](/de/docs/Mozilla/Firefox/Releases/115).
