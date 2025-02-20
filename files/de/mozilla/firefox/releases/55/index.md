---
title: Firefox 55 für Entwickler
slug: Mozilla/Firefox/Releases/55
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{FirefoxSidebar}}

Firefox 55 wurde am 8. August 2017 veröffentlicht. Dieser Artikel listet wichtige Änderungen auf, die für Webentwickler nützlich sind.

## Änderungen für Webentwickler

### Entwickler-Tools

- Hinzufügen von Filtern für Netzwerkabfragen basierend auf Spaltenwerten und anderen Eigenschaften ([Firefox-Bug 1041895](https://bugzil.la/1041895), [Firefox-Bug 1354508](https://bugzil.la/1354508), [Firefox-Bug 1354507](https://bugzil.la/1354507)) sowie unter Verwendung von regulären Ausdrücken ([Firefox-Bug 1354495](https://bugzil.la/1354495)).
- Möglichkeit hinzugefügt, Spalten im [Network Monitor](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) anzuzeigen und auszublenden ([Firefox-Bug 862855](https://bugzil.la/862855)).
- Spalten für Remote-IP ([Firefox-Bug 1344523](https://bugzil.la/1344523)), Protokoll ([Firefox-Bug 1345489](https://bugzil.la/1345489)), Schema ([Firefox-Bug 1356867](https://bugzil.la/1356867)), Cookies und Set-Cookies ([Firefox-Bug 1356869](https://bugzil.la/1356869)) wurden zum Network Monitor hinzugefügt.
- Der {{HTTPHeader("SourceMap")}} HTTP-Header wird jetzt unterstützt (vorherige Versionen unterstützten nur den veralteten `X-SourceMap` Header, siehe [Firefox-Bug 1346936](https://bugzil.la/1346936)).

### HTML

- Elemente, bei denen [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt wurde, verwenden jetzt {{htmlelement("div")}}-Elemente, um verschiedene Textzeilen zu trennen, um Firefox mit anderen modernen Browsern gleichzustellen ([Firefox-Bug 1297414](https://bugzil.la/1297414)). Weitere Details dazu finden Sie unter [Unterschiede bei der Markup-Generierung](/de/docs/Web/HTML/Global_attributes/contenteditable#differences_in_markup_generation).
- Standardmäßige Aktivierung von `dom.forms.datetime` in der Nightly-Version ([Firefox-Bug 1366188](https://bugzil.la/1366188)).

### CSS

- Die Eigenschaft {{cssxref("transform-box")}} wurde standardmäßig verfügbar gemacht ([Firefox-Bug 1208550](https://bugzil.la/1208550)).
- Implementierung der `frames()` Timing-Funktion ([Firefox-Bug 1248340](https://bugzil.la/1248340)).
- Implementierung der Eigenschaft {{cssxref("text-justify")}} ([Firefox-Bug 1343512](https://bugzil.la/1343512), [Firefox-Bug 276079](https://bugzil.la/276079)).
- \[css-grid] {{cssxref("fit-content")}} reserviert unerwartet Platz für die vollständige Klammergröße in {{cssxref("repeat", "repeat()")}} ([Firefox-Bug 1359060](https://bugzil.la/1359060)).
- Die logischen Werte für {{cssxref("float")}} / {{cssxref("clear")}} — `inline-start` und `inline-end` — sind jetzt standardmäßig in allen Kanälen verfügbar ([Firefox-Bug 1253919](https://bugzil.la/1253919)).
- Die `layout.css.variables.enabled`-Präferenz wurde vollständig entfernt, was bedeutet, dass die Funktion [CSS-Variablen](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) immer aktiviert ist und nicht mehr deaktiviert werden kann ([Firefox-Bug 1312328](https://bugzil.la/1312328)).
- Implementierung der proprietären Eigenschaft `-moz-context-properties` ([Firefox-Bug 1058040](https://bugzil.la/1058040)).
- Null (0) Winkel ohne Grad-Einheit wird in {{cssxref("gradient/linear-gradient")}} nicht korrekt interpretiert ([Firefox-Bug 1363292](https://bugzil.la/1363292)).
- Das {{cssxref("::cue")}} Pseudo-Element wird jetzt unterstützt; es greift auf Text-Cues zu, die in einem Media-Element präsentiert werden ([Firefox-Bug 1318542](https://bugzil.la/1318542)).

### SVG

- Das Attribut {{ SVGAttr("fr") }} des {{svgelement("radialGradient")}} Elements wurde implementiert ([Firefox-Bug 1240275](https://bugzil.la/1240275)).

### JavaScript

- Die Objekte {{jsxref("SharedArrayBuffer")}} und {{jsxref("Atomics")}} sind jetzt standardmäßig aktiviert. Siehe [A Taste of JavaScript's New Parallel Primitives](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) für eine Einführung in JavaScript Shared Memory und Atomics.
- Der Rest-Operator (`...`) wird jetzt in [Objektdestrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) unterstützt, und der Spread-Operator (`...`) funktioniert jetzt in [Objektliteralen](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) (ECMAScript-Vorschlag der Stufe 3: [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread), [Firefox-Bug 1339395](https://bugzil.la/1339395)).
- [Async Generator-Methoden](/de/docs/Web/JavaScript/Reference/Functions/Method_definitions#async_generator_methods) werden jetzt unterstützt ([Firefox-Bug 1353693](https://bugzil.la/1353693)).
- Die Methoden {{jsxref("String.prototype.toLocaleLowerCase()")}} und {{jsxref("String.prototype.toLocaleUpperCase()")}} unterstützen jetzt einen optionalen `locale`-Parameter, um ein Sprach-Tag für sprachspezifische Groß- und Kleinschreibungen anzugeben ([Firefox-Bug 1318403](https://bugzil.la/1318403)).
- Das Objekt {{jsxref("Intl/Collator", "Intl.Collator")}} unterstützt jetzt die Option `caseFirst` ([Firefox-Bug 866473](https://bugzil.la/866473)).
- Die [Intl-API](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl) verwendet jetzt die Standard-Spracheinstellung des Browsers anstelle der Standard-Spracheinstellung des Betriebssystems, wenn keine Spracheinstellung bereitgestellt wird ([Firefox-Bug 1346674](https://bugzil.la/1346674)).
- [Template Call Sites Objects](/de/docs/Web/JavaScript/Reference/Template_literals) werden jetzt für jeden Realm standardisiert, basierend auf ihrer Liste der Raw-Strings ([Firefox-Bug 1108941](https://bugzil.la/1108941)).
- Die Konstruktoren von {{jsxref("TypedArray")}} (wie {{jsxref("Int8Array")}}, {{jsxref("Float32Array")}}, usw.) wurden auf ES2017 aktualisiert. Sie verwenden nun die `ToIndex`-Operation und erlauben Konstruktoren ohne Argumente, wodurch typisierte Arrays mit der Länge Null zurückgegeben werden ([Firefox-Bug 1317383](https://bugzil.la/1317383)).

### APIs

#### Neue APIs

- Die [Collaborative Scheduling of Background Tasks API](/de/docs/Web/API/Background_Tasks_API) (auch bekannt als **Background Tasks API** oder `requestIdleCallback` API) ist jetzt standardmäßig aktiviert, nachdem sie seit Firefox 53 hinter einer Präferenz verfügbar war. Diese API ermöglicht es Ihnen, Aufgaben zu planen, die ausgeführt werden, wenn der Browser feststellt, dass vor dem nächsten Repaint freie Zeit verfügbar ist, sodass Ihr Code diese Zeit ohne sichtbare Leistungseinbußen nutzen kann ([Firefox-Bug 1314959](https://bugzil.la/1314959)).
- Die [WebVR 1.1 API](/de/docs/Web/API/WebVR_API) ist nun standardmäßig unter Windows aktiviert (und auf macOS in Nightly verfügbar). Diese API stellt virtuelle Realitätssysteme — z. B. Headsets wie Oculus Rift oder HTC Vive — für Web-Apps bereit, sodass Entwickler Positions- und Bewegungsinformationen in eine Bewegung innerhalb einer 3D-Szene übersetzen und Inhalte in solchen Geräten darstellen können.
- Die [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API) — die es ermöglicht, Änderungen im Schnittbereich eines Ziel-Elements mit einem übergeordneten Element oder dem {{Glossary("Viewport", "Viewport")}} eines Dokuments asynchron zu beobachten — wurde hinzugefügt ([Firefox-Bug 1321865](https://bugzil.la/1321865)).

...
