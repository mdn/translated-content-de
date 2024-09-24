---
title: Polyfill
slug: Glossary/Polyfill
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Ein Polyfill ist ein Code (in der Regel JavaScript im Web), der verwendet wird, um moderne Funktionalität in älteren Browsern bereitzustellen, die diese nicht nativ unterstützen.

Zum Beispiel könnte ein Polyfill verwendet werden, um die Funktionalität von {{cssxref("text-shadow")}} in IE7 mit proprietären IE-Filtern nachzuahmen oder rem-Einheiten oder Media Queries zu imitieren, indem JavaScript verwendet wird, um die Gestaltung dynamisch entsprechend anzupassen, oder was auch immer Sie benötigen.

Der Grund, warum Polyfills nicht ausschließlich verwendet werden, liegt in der besseren Funktionalität und der besseren Leistung. Native Implementierungen von APIs können mehr leisten und sind schneller als Polyfills. Zum Beispiel enthält der [Object.create Polyfill](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/create#see_also) nur die Funktionen, die in einer nicht-nativen Implementierung von Object.create möglich sind.

Manchmal werden Polyfills verwendet, um Probleme anzugehen, bei denen Browser dieselben Funktionen auf unterschiedliche Weise implementieren. Der Polyfill nutzt nicht-standardisierte Funktionen in einem bestimmten Browser, um JavaScript eine standardkonforme Möglichkeit zu geben, auf die Funktion zuzugreifen. Obwohl dieser Grund für das Verwenden von Polyfills heute sehr selten ist, war er besonders zu Zeiten von IE6 und Netscape weit verbreitet, als jeder Browser JavaScript sehr unterschiedlich implementierte. Die [1. Version von jQuery](https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.js) war ein frühes Beispiel für ein Polyfill. Es war im Wesentlichen eine Zusammenstellung von browser-spezifischen Workarounds, um JavaScript-Entwicklern eine einheitliche API zu bieten, die in allen Browsern funktionierte. Zur damaligen Zeit hatten JavaScript-Entwickler große Probleme, ihre Website auf allen Geräten zum Laufen zu bringen, weil es eine so große Diskrepanz zwischen den Browsern gab, dass die Website möglicherweise radikal anders programmiert werden musste und eine viel andere Benutzeroberfläche basierend auf dem Browser des Nutzers hatte. Daher hatten JavaScript-Entwickler nur Zugang zu einer sehr kleinen Anzahl von JavaScript-APIs, die mehr oder weniger konsistent in allen Browsern funktionierten. Die Verwendung eines Polyfills, um browser-spezifische Implementierungen zu behandeln, ist heutzutage weniger üblich, da moderne Browser meist eine breite Palette von APIs gemäß den Standard-Semantiken implementieren.

## Siehe auch

- [Was ist ein Polyfill?](https://remysharp.com/2010/10/08/what-is-a-polyfill) (Artikel von Remy Sharp, dem Ursprungsgeber des Begriffs)
