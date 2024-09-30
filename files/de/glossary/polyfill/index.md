---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Polyfill ist ein Stück Code (meistens JavaScript im Web), das verwendet wird, um moderne Funktionalitäten in älteren Browsern bereitzustellen, die diese nicht nativ unterstützen.

Ein Polyfill könnte beispielsweise verwendet werden, um die Funktionalität von {{cssxref("text-shadow")}} in IE7 mit proprietären IE-Filtern nachzubilden, oder um `rem`-Einheiten oder Medienabfragen durch den dynamischen Einsatz von JavaScript anzupassen, oder was auch immer Sie benötigen.

Der Grund, warum Polyfills nicht ausschließlich verwendet werden, liegt in der besseren Funktionalität und Leistung. Native Implementierungen von APIs können mehr leisten und sind schneller als Polyfills. Zum Beispiel enthält der [Object.create Polyfill](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#see_also) nur die Funktionen, die in einer nicht-nativen Implementierung von `Object.create` möglich sind.

Manchmal werden Polyfills verwendet, um Probleme zu lösen, bei denen Browser dieselben Funktionen auf unterschiedliche Weise implementieren. Das Polyfill nutzt nicht standardisierte Funktionen in einem bestimmten Browser, um JavaScript eine standardkonforme Zugriffsmöglichkeit auf die Funktion zu geben. Obwohl dieser Grund für das Polyfilling heute sehr selten ist, war er besonders in den Zeiten von IE6 und Netscape weit verbreitet, als jeder Browser JavaScript sehr unterschiedlich implementierte. Die [1. Version von jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) war ein frühes Beispiel für ein Polyfill. Es war im Wesentlichen eine Sammlung von browser-spezifischen Problemumgehungen, die JavaScript-Entwicklern eine einheitliche API bot, die in allen Browsern funktionierte. Damals hatten JavaScript-Entwickler große Probleme, ihre Websites auf allen Geräten zum Laufen zu bringen, da es solche Unterschiede zwischen den Browsern gab, dass die Website möglicherweise radikal anders programmiert und eine viel unterschiedliche Benutzeroberfläche basierend auf dem Browser des Benutzers haben musste. Daher standen JavaScript-Entwicklern nur eine sehr geringe Anzahl von JavaScript-APIs zur Verfügung, die mehr oder weniger konsistent in allen Browsern funktionierten. Die Verwendung eines Polyfills zur Handhabung browser-spezifischer Implementierungen ist heute weniger verbreitet, da moderne Browser meist eine breite Palette von APIs gemäß den Standard-Semantiken umsetzen.

## Siehe auch

- [Was ist ein Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (Artikel von Remy Sharp, dem Urheber des Begriffs)
