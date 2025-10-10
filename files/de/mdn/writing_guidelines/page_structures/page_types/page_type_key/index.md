---
title: Der Front-Matter-Schlüssel `page-type`
slug: MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der Front-Matter-Schlüssel `page-type` beschreibt den Typ einer MDN-Seite. Dies ermöglicht es MDN-Inhaltstools, die Inhaltsüberprüfung und die Seitenleistenorganisation besser zu automatisieren.

Wie jeder andere Front-Matter-Schlüssel wird der `page-type`-Schlüssel im YAML am Anfang von "index.md" angegeben:

```md
---
title: 100 Continue
slug: Web/HTTP/Reference/Status/100
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.100
sidebar: http
---
```

Jeder Hauptbereich der Website — JavaScript, CSS und so weiter — hat eine Reihe von spezifischen `page-type`-Werten, und es gibt auch eine Reihe von generischen Werten, die in jedem Bereich der Website erscheinen können.

## Generische Seitentypen

Diese Seitentypen sind nicht auf einen bestimmten MDN-Technologiebereich beschränkt:

- `guide`: ein generischer Leitfaden ohne spezifische Struktur.
- `landing-page`: ein Überblick über das Thema, eine Einführung in den Abschnitt und die Navigation zu den wichtigsten Bereichen.
- `listing-page`: eine kurze Beschreibung des Abschnitts und eine Liste der Unterseiten innerhalb dieses Abschnitts.
- `how-to`: ein zielorientierter Artikel aus einer Anleitung.
- `tutorial`: ein Überblick über einen auf Lernen ausgerichteten Artikel.
- `tutorial-chapter`: ein Teil eines mehrteiligen Tutorials.

## Bereichsspezifische Seitentypen

Dieser Abschnitt listet Seitentypen auf, die spezifisch für einen einzelnen Bereich von MDN sind.

### Seitentypen im Lernbereich

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Learning](/de/docs/Learn_web_development) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen sein.

- `learn-topic`: ein Überblick über ein Thema, das heißt, eine Sammlung von Modulen wie [_CSS_](/de/docs/Learn_web_development/Core/Styling_basics).
- `learn-module`: ein Überblick über ein Modul, das heißt, eine geordnete Sammlung von Leitfäden, wie [_Inhalte mit HTML strukturieren_](/de/docs/Learn_web_development/Core/Structuring_content).
- `learn-module-chapter`: ein Leitfaden, der Teil eines Moduls ist, wie [_Mobile Zugänglichkeit_](/de/docs/Learn_web_development/Core/Accessibility/Mobile).
- `learn-module-assessment`: ein spezieller Leitfaden mit einer Aktivität, die es ermöglicht, das Verständnis eines Moduls oder eines Teils davon zu bewerten, wie [_Testen Sie Ihre Fähigkeiten: Formulare und Schaltflächen_](/de/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons).
- `learn-faq`: die Antwort auf eine spezifische Frage zur Webentwicklung, wie [_Was ist ein Domainname?_](/de/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name).

### Seitentypen für Barrierefreiheit

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Accessibility](/de/docs/Web/Accessibility) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `aria-role`: eine ARIA [Rolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles), wie [`section`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/section_role).
- `aria-attribute`: ein ARIA [Attribut](/de/docs/Web/Accessibility/ARIA/Reference/Attributes), wie [`aria-sort`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-sort).

### Seitentypen für CSS

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/CSS](/de/docs/Web/CSS) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `css-at-rule`: eine [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), wie {{cssxref("@media")}}.
- `css-at-rule-descriptor`: ein At-Regel-Deskriptor, wie [`@counter-style/prefix`](/de/docs/Web/CSS/@counter-style/prefix).
- `css-combinator`: ein Kombinator, wie der [nachfolgende Kombinator](/de/docs/Web/CSS/Descendant_combinator).
- `css-function`: eine [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions), wie {{cssxref("max")}}.
- `css-keyword`: ein Schlüsselwort, wie {{cssxref("inherit")}}.
- `css-media-feature`: eine [Medienfunktion](/de/docs/Web/CSS/@media#media_features), wie [`hover`](/de/docs/Web/CSS/@media/hover).
- `css-module`: ein Modul, wie [CSS-Animationen](/de/docs/Web/CSS/CSS_animations).
- `css-property`: eine Eigenschaft, wie {{cssxref("background-color")}}.
- `css-pseudo-class`: eine [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), wie {{cssxref(":enabled")}}.
- `css-pseudo-element`: ein [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements), wie {{cssxref("::before")}}.
- `css-selector`: ein [Basis-Selektor](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#basic_selectors), wie der [Klassenselektor](/de/docs/Web/CSS/Class_selectors).
- `css-shorthand-property`: eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties), wie {{cssxref("background")}}.
- `css-type`: ein [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types), wie [`<color>`](/de/docs/Web/CSS/color_value).

### Seitentypen für das Glossar

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Glossary](/de/docs/Glossary) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten sein.

- `glossary-definition`: eine Seite, die einen Begriff definiert, wie {{Glossary("Bezier_curve", "Bézierkurve")}}.
- `glossary-disambiguation`: eine Seite, die Links zu zwei oder mehr Definitionsseiten für einen mehrdeutigen Begriff bereitstellt, wie {{Glossary("Node", "Knoten")}}.

### Seitentypen für HTML

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/HTML](/de/docs/Web/HTML) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `html-attribute`: ein HTML-Attribut, wie [`autocomplete`](/de/docs/Web/HTML/Reference/Attributes/autocomplete).
- `html-attribute-value`: ein einzelner Wert für ein HTML-Attribut, wie [`dns-prefetch`](/de/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch).
- `html-element`: ein HTML-Element, wie [`<button>`](/de/docs/Web/HTML/Reference/Elements/button).

### Seitentypen für HTTP

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/HTTP](/de/docs/Web/HTTP) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `http-csp-directive`: eine [CSP](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Direktive, wie [`script-src`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).
- `http-cors-error`: ein [CORS](/de/docs/Web/HTTP/Guides/CORS)-Fehler, wie [`CORSDidNotSucceed`](/de/docs/Web/HTTP/Guides/CORS/Errors/CORSDidNotSucceed).
- `http-permissions-policy-directive`: eine [`Permissions-Policy`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy)-Direktive, wie [`accelerometer`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer).
- `http-header`: ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), wie [`Referer`](/de/docs/Web/HTTP/Reference/Headers/Referer).
- `http-method`: eine [HTTP-Anfragemethode](/de/docs/Web/HTTP/Reference/Methods) wie [`GET`](/de/docs/Web/HTTP/Reference/Methods/GET).
- `http-status-code`: ein [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status), wie [`404`](/de/docs/Web/HTTP/Reference/Status/404).

### Seitentypen für JavaScript

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/JavaScript](/de/docs/Web/JavaScript) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `javascript-class`: eine Definition eines eingebauten Objekts, wie [`Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array).
- `javascript-constructor`: ein Objektkonstruktor, wie [`Array()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Array).
- `javascript-error`: ein Fehler, wie [RangeError: ungültige Array-Länge](/de/docs/Web/JavaScript/Reference/Errors/Invalid_array_length).
- `javascript-function`: eine eingebautes Funktion, die keine Objektmethode ist, wie [`encodeURI()`](/de/docs/Web/JavaScript/Reference/Global_Objects/encodeURI).
- `javascript-global-property`: eine globale Eigenschaft, wie [`NaN`](/de/docs/Web/JavaScript/Reference/Global_Objects/NaN).
- `javascript-instance-accessor-property`: eine Zugriffseigenschaft auf einer Objektinstanz, wie [`Map.prototype.size`](/de/docs/Web/JavaScript/Reference/Global_Objects/Map/size).
- `javascript-instance-data-property`: eine Dateneigenschaft auf einer Objektinstanz, wie die [`length`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/length)-Eigenschaft eines `Array`.
- `javascript-instance-method`: eine Methode auf einer Objektinstanz, wie [`Array.prototype.at()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
- `javascript-language-feature`: ein Teil der JavaScript-Syntax, der in keine andere Kategorie passt, wie [Rest-Parameter](/de/docs/Web/JavaScript/Reference/Functions/rest_parameters).
- `javascript-namespace`: ein Objekt, das nicht instanziierbar ist und nur statische Mitglieder hat, wie [`Math`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math).
- `javascript-operator`: ein Operator, wie [Addition (+)](/de/docs/Web/JavaScript/Reference/Operators/Addition).
- `javascript-statement`: ein Statement, wie [`switch`](/de/docs/Web/JavaScript/Reference/Statements/switch).
- `javascript-static-accessor-property`: eine statische Zugriffseigenschaft, wie [`RegExp.lastMatch`](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch).
- `javascript-static-data-property`: eine statische Dateneigenschaft, wie [`Math.E`](/de/docs/Web/JavaScript/Reference/Global_Objects/Math/E).
- `javascript-static-method`: eine statische Methode, wie [`Array.from()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

### Seitentypen für MathML

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/MathML](/de/docs/Web/MathML) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `mathml-attribute`: ein MathML-Attribut, wie [`mathcolor`](/de/docs/Web/MathML/Reference/Global_attributes/mathcolor).
- `mathml-element`: ein HTML-Element, wie [`<msqrt>`](/de/docs/Web/MathML/Reference/Element/msqrt).

### Seitentypen für SVG

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/SVG](/de/docs/Web/SVG) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `svg-attribute`: ein SVG-Attribut, wie [`crossorigin`](/de/docs/Web/SVG/Reference/Attribute/crossorigin).
- `svg-element`: ein SVG-Element, wie [`<circle>`](/de/docs/Web/SVG/Reference/Element/circle).

### Seitentypen für Web-APIs

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/API](/de/docs/Web/API) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `web-api-overview`: gibt einen Überblick über eine Web-API, wie die [Fetch API](/de/docs/Web/API/Fetch_API).
- `web-api-interface`: eine Web-API-Schnittstelle, wie [`Request`](/de/docs/Web/API/Request).
- `web-api-constructor`: ein Konstruktor, wie [`Request()`](/de/docs/Web/API/Request/Request).
- `web-api-instance-method`: eine Instanzmethode, wie [`cache.add()`](/de/docs/Web/API/Cache/add).
- `web-api-instance-property`: eine Instanzeigenschaft, wie [`request.headers`](/de/docs/Web/API/Request/headers).
- `web-api-static-method`: eine statische Methode, wie [`Response.error()`](/de/docs/Web/API/Response/error_static).
- `web-api-static-property`: eine statische Eigenschaft, wie [`Notification.permission`](/de/docs/Web/API/Notification/permission_static).
- `web-api-event`: ein Ereignis, wie [`Notification.click`](/de/docs/Web/API/Notification/click_event).
- `webgl-extension`: eine WebGL-Erweiterung, wie [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers).
- `webgl-extension-method`: eine WebGL-Erweiterungsmethode, wie [`OES_vertex_array_object.bindVertexArrayOES()`](/de/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES).

### Seitentypen für WebAssembly

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [WebAssembly/](/de/docs/WebAssembly) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der generischen Seitentypen sein.

- `webassembly-function`: eine globale Funktion, das heißt, eine Methode direkt unter dem `WebAssembly`-Objekt, das als Namensraum fungiert, wie [`WebAssembly.instantiate()`](/de/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).
- `webassembly-constructor`: ein Konstruktor, wie [`WebAssembly.Exception()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/Exception).
- `webassembly-interface`: eine WebAssembly-Schnittstelle, wie [`WebAssembly.LinkError`](/de/docs/WebAssembly/Reference/JavaScript_interface/LinkError).
- `webassembly-instance-property`: eine Instanzeigenschaft, wie [`WebAssembly.Instance.exports`](/de/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports).
- `webassembly-instance-method`: eine Instanzmethode, wie [`WebAssembly.Exception.getArg()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Exception/getArg).
- `webassembly-static-method`: eine statische Methode, wie [`WebAssembly.Module.exports()`](/de/docs/WebAssembly/Reference/JavaScript_interface/Module/exports_static).
- `webassembly-instruction`: eine Anweisung oder eine Reihe von Anweisungen, wie [`Wrap`](/de/docs/WebAssembly/Reference/Numeric/Wrap).

### Seitentypen für WebDriver

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/WebDriver](/de/docs/Web/WebDriver) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `webdriver-command`: ein WebDriver-Befehl, wie [`CloseWindow`](/de/docs/Web/WebDriver/Reference/Commands/CloseWindow).
- `webdriver-capability`: eine WebDriver-Fähigkeit, wie [`acceptInsecureCerts`](/de/docs/Web/WebDriver/Reference/Capabilities/acceptInsecureCerts).
- `webdriver-error`: ein WebDriver-Fehler, wie [Unsicheres Zertifikat](/de/docs/Web/WebDriver/Reference/Errors/InsecureCertificate).

### Seitentypen für WebExtensions

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Mozilla/Add-ons/WebExtensions](/de/docs/Mozilla/Add-ons/WebExtensions) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `webextension-api`: ein WebExtension-API, wie [`alarms`](/de/docs/Mozilla/Add-ons/WebExtensions/API/alarms).
- `webextension-api-event`: ein WebExtension-API-Ereignis, wie [`action.onClicked`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/onClicked).
- `webextension-api-function`: eine WebExtension-Funktion, wie [`action.setBadgeText()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/action/setBadgeText).
- `webextension-api-property`: eine WebExtension-Eigenschaft, wie [`browserSettings.openBookmarksInNewTabs`](/de/docs/Mozilla/Add-ons/WebExtensions/API/browserSettings/openBookmarksInNewTabs).
- `webextension-api-type`: ein WebExtension-Typ, wie [`contextualIdentities.ContextualIdentity`](/de/docs/Mozilla/Add-ons/WebExtensions/API/contextualIdentities/ContextualIdentity).
- `webextension-manifest-key`: ein WebExtension-Manifests-Schlüssel, wie [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts).

### Seitentypen für Web-Manifest

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/Manifest](/de/docs/Web/Progressive_web_apps/Manifest) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `web-manifest-member`: ein Mitglied eines Manifests, wie [`description`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/description).

### Seitentypen für XPath

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/XPath](/de/docs/Web/XML/XPath) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `xpath-function`: eine Funktion, wie [`ceiling()`](/de/docs/Web/XML/XPath/Reference/Functions/ceiling)

### Seitentypen für XSLT

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/XSLT](/de/docs/Web/XML/XSLT) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `xslt-element`: ein Element von XSLT, wie [`<xsl:message>`](/de/docs/Web/XML/XSLT/Reference/Element/message).

### Seitentypen für EXSLT

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Web/EXSLT](/de/docs/Web/XML/EXSLT) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `xslt-function`: eine Funktion von EXSLT, wie [`exsl:node-set()`](/de/docs/Web/XML/EXSLT/Reference/exsl/node-set).

### Seitentypen für Firefox

Dieser Abschnitt listet `page-type`-Werte für Seiten unter [Mozilla/Firefox](/de/docs/Mozilla/Firefox) auf. Jede Seite in diesem Teil des Baums muss einen `page-type` haben, und dessen Wert muss einer der unten aufgeführten oder einer der [generischen Seitentypen](#generische_seitentypen) sein.

- `firefox-release-notes`: die Versionshinweise für eine bestimmte Firefox-Version, wie [_Firefox 115 für Entwickler_](/de/docs/Mozilla/Firefox/Releases/115).
