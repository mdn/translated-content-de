---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Polyfill ist ein Stück Code (in der Regel JavaScript im Web), das verwendet wird, um moderne Funktionalitäten auf älteren Browsern bereitzustellen, die dies nicht nativ unterstützen.

Ein Beispiel für ein Polyfill könnte sein, die Funktionalität eines {{cssxref("text-shadow")}} in IE7 mit proprietären IE-Filtern nachzuahmen oder `rem`-Einheiten oder Media-Queries durch JavaScript dynamisch an die entsprechende Stilisierung anzupassen oder was auch immer Sie benötigen.

Der Grund, warum Polyfills nicht ausschließlich verwendet werden, liegt in besserer Funktionalität und besserer Leistung. Native Implementierungen von APIs können mehr leisten und sind schneller als Polyfills. Zum Beispiel enthält das [Object.create Polyfill](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#see_also) nur die Funktionalitäten, die in einer nicht-nativen Implementierung von `Object.create` möglich sind.

Manchmal werden Polyfills auch verwendet, um Probleme zu adressieren, bei denen Browser dieselben Funktionen auf unterschiedliche Weise implementieren. Das Polyfill nutzt nicht standardisierte Features in einem bestimmten Browser, um JavaScript eine standardkonforme Möglichkeit zum Zugriff auf die Funktion zu geben. Obwohl dieser Grund für Polyfills heutzutage sehr selten ist, war er insbesondere in den Tagen von IE6 und Netscape vorherrschend, in denen jeder Browser JavaScript sehr unterschiedlich implementierte. Die [1. Version von jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) war ein frühes Beispiel für ein Polyfill. Es war im Wesentlichen eine Zusammenstellung von browser-spezifischen Workarounds, um JavaScript-Entwicklern eine einzige gemeinsame API bereitzustellen, die in allen Browsern funktionierte. Damals hatten JavaScript-Entwickler erhebliche Probleme, ihre Webseiten auf allen Geräten zum Laufen zu bringen, da es gravierende Unterschiede zwischen den Browsern gab, sodass die Webseite möglicherweise radikal unterschiedlich programmiert werden und eine ganz andere Benutzeroberfläche je nach verwendetem Browser haben musste. So hatte der JavaScript-Entwickler nur Zugriff auf eine sehr kleine Anzahl von JavaScript-APIs, die mehr oder weniger konsistent über alle Browser hinweg funktionierten. Die Verwendung eines Polyfills zur Handhabung browser-spezifischer Implementierungen ist heute weniger üblich, da moderne Browser größtenteils ein breites Set von APIs gemäß standardmäßiger Semantik implementieren.

## Siehe auch

- [What is a polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (Artikel von Remy Sharp, dem Urheber des Begriffs)
