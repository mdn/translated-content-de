---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein Polyfill ist ein Stück Code (gewöhnlich JavaScript im Web), das verwendet wird, um moderne Funktionalität in älteren Browsern bereitzustellen, die dies nicht nativ unterstützen.

Ein Polyfill könnte beispielsweise verwendet werden, um die Funktionalität von {{cssxref("text-shadow")}} in IE7 mit proprietären IE-Filtern nachzuahmen, oder `rem`-Einheiten oder Media Queries zu imitieren, indem JavaScript dynamisch das Styling entsprechend anpasst, oder was auch immer Sie benötigen.

Der Grund, warum Polyfills nicht ausschließlich verwendet werden, ist, dass native Implementierungen besser und leistungsfähiger sind. Native Implementierungen von APIs können mehr leisten und sind schneller als Polyfills. Der [Object.create Polyfill](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#see_also) enthält beispielsweise nur die Funktionalitäten, die in einer nicht nativen Implementierung von Object.create möglich sind.

Manchmal werden Polyfills auch verwendet, um Probleme zu beheben, bei denen Browser dieselben Funktionen auf unterschiedliche Weise implementieren. Der Polyfill verwendet nicht standardmäßige Funktionen in einem bestimmten Browser, um JavaScript einen standardskonformen Zugriff auf die Funktion zu geben. Obwohl dieser Grund für Polyfills heute sehr selten ist, war er besonders in den Tagen von IE6 und Netscape verbreitet, als jeder Browser JavaScript sehr unterschiedlich implementierte. Die [erste Version von jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) war ein frühes Beispiel für ein Polyfill. Es war im Wesentlichen eine Sammlung von browser-spezifischen Umgehungen, um JavaScript-Entwicklern eine einzige, gemeinsame API bereitzustellen, die in allen Browsern funktionierte. Damals hatten JavaScript-Entwickler große Probleme, ihre Website auf allen Geräten lauffähig zu machen, da es solche Unterschiede zwischen den Browsern gab, dass die Website möglicherweise radikal anders programmiert werden musste und eine völlig andere Benutzeroberfläche basierend auf dem Browser des Benutzers erforderte. Somit hatte der JavaScript-Entwickler nur Zugriff auf eine sehr kleine Handvoll von JavaScript-APIs, die mehr oder weniger konsistent über alle Browser funktionierten. Heutzutage ist es bei der Handhabung von browser-spezifischen Implementierungen weniger üblich, ein Polyfill zu verwenden, da moderne Browser weitgehend einen breiten Satz von APIs gemäß den standardisierten Semantiken implementieren.

## Siehe auch

- [Was ist ein Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (Artikel von Remy Sharp, der den Begriff geprägt hat)
