---
title: Performance-Budgets
slug: Web/Performance/Guides/Performance_budgets
l10n:
  sourceCommit: d93983dfe60b65633f67fffe04676c241ff92960
---

Ein Performance-Budget ist ein Grenzwert, um Regressionen zu verhindern. Es kann für eine Datei, einen Dateityp, alle auf einer Seite geladenen Dateien, eine bestimmte Metrik (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}), eine benutzerdefinierte Metrik (z. B. Time to Hero Element) oder einen Schwellenwert über einen bestimmten Zeitraum gelten.

## Warum benötige ich ein Performance-Budget?

Ein Budget dient dazu, Ihre erreichbaren Ziele widerzuspiegeln. Es ist ein Kompromiss zwischen der Benutzererfahrung und anderen Leistungsindikatoren (z. B. Conversion-Rate).

Diese Ziele können sein:

- Zeitbasiert (z. B. {{Glossary("Time_to_interactive", "Time to Interactive")}}, {{Glossary("First_contentful_paint", "First Contentful Paint")}}).
- Mengenbasiert (z. B. Anzahl der JS-Dateien/Gesamtgröße der Bilder).
- Regelbasiert (z. B. PageSpeed-Index, Lighthouse-Score).

Ihr vorrangiges Ziel ist es, Regressionen zu verhindern, sie können jedoch Einblicke zur Prognose von Trends bieten (d. h. Im September wurden in einer Woche 50 % des Budgets verbraucht).

Zusätzlich kann es Entwicklungsbedarf aufdecken (d. h. Eine große Bibliothek mit kleineren Alternativen wird häufig ausgewählt, um ein häufiges Problem zu lösen).

## Wie definiere ich ein Performance-Budget?

Ein Budget sollte zwei Stufen umfassen:

- Warnung.
- Fehler.

Die Warnstufe ermöglicht es Ihnen, proaktiv zu handeln und technische Schulden zu planen, ohne die Entwicklung oder Deployments zu blockieren.

Die Fehlerstufe ist eine obere Grenze, bei der Änderungen negative und spürbare Auswirkungen haben werden.

Der erste Schritt besteht darin, die Geräte und Verbindungsgeschwindigkeiten zu messen, über die Ihre Benutzer zugreifen (z. B. ein Android-Gerät für \~$_200_ über eine 3G-Verbindung), und dabei mehrere [Tools](/de/docs/Learn_web_development/Extensions/Performance/Best_practices) zu verwenden. Diese zeitbasierten Metriken werden in Budgets für Dateigrößen übersetzt.

Eine Standardgrundlage zur Verringerung der Absprungrate besteht darin, [Time to Interactive unter 5 Sekunden bei 3G/4G und unter 2 Sekunden bei nachfolgenden Ladevorgängen zu erreichen](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/). Abhängig von den spezifischen Zielen und Inhalten Ihrer Website können Sie sich jedoch für andere Metriken entscheiden.

Bei einer textlastigen Website wie einem Blog oder einer Nachrichtenseite könnte die Metrik {{Glossary("First_contentful_paint", "First Contentful Paint")}} das Benutzerverhalten genauer widerspiegeln. (d. h. Wie schnell Benutzer mit dem Lesen beginnen können), wodurch dateispezifische Budgets (z. B. Schriftgröße) und deren Optimierungen bestimmt werden. (z. B. Verwendung von [font-display](/de/docs/Web/CSS/Reference/At-rules/@font-face/font-display), um die [wahrgenommene Leistung](/de/docs/Learn_web_development/Extensions/Performance/Perceived_performance) zu verbessern).

Der letztendliche Wert eines Performance-Budgets besteht darin, die Auswirkungen der Performance mit Geschäfts- oder Produktzielen zu korrelieren. Beim Definieren von Metriken sollten Sie sich auf die [Benutzererfahrung](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/) konzentrieren, die nicht nur die Absprung- oder Conversion-Rate bestimmt, sondern auch die Wahrscheinlichkeit, dass dieser Benutzer zurückkehrt.

## Wie implementiere ich ein Performance-Budget?

Während der Entwicklung gibt es einige Tools, um Prüfungen für neue oder geänderte Assets durchzuführen:

- Ein Module-Bundler (z. B. [webpack](https://webpack.js.org/)) verfügt über [Performance-Funktionen](https://webpack.js.org/configuration/performance/), die Sie benachrichtigen, wenn Assets festgelegte Grenzwerte überschreiten.
- [Bundlesize](https://github.com/siddharthkp/bundlesize) ermöglicht Ihnen, Dateigrößenprüfungen in Ihrer {{Glossary("continuous_integration", "kontinuierlichen Integration")}} (CI)-Pipeline zu definieren und auszuführen.

Prüfungen der Dateigröße sind die erste Verteidigungslinie gegen Regressionen, aber die Übertragung der Größe zurück in Zeitmetriken kann schwierig sein, da Entwicklungsumgebungen möglicherweise Skripte von Drittanbietern und Optimierungen vermissen, die üblicherweise von einem {{Glossary("CDN", "CDN")}} bereitgestellt werden.

Der erste Schritt besteht darin, für jeden Branch eine Entwicklungsgrundlage zum Vergleichen zu definieren. Die Genauigkeit der Differenz zwischen Entwicklung und Produktion kann als Ziel verwendet werden, um die Live-Umgebung besser abzubilden.

Der [Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot) lässt sich in [Travis CI](https://www.travis-ci.com/) integrieren und kann verwendet werden, um [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)- und [Webpage Test](https://www.webpagetest.org/)-Metriken von einer Entwicklungs-URL zu erfassen. Der Bot besteht oder schlägt fehl, basierend auf den bereitgestellten Mindest-Scores.

## Wie setze ich ein Performance-Budget durch?

Je früher Sie eine potenzielle Ergänzung identifizieren können, die das Budget erhöht, desto besser können Sie den aktuellen Zustand Ihrer Website analysieren und Optimierungen oder unnötigen Code ermitteln.

Sie sollten jedoch mehrere Budgets haben und dynamisch sein. Sie sollen Ihre fortlaufenden Ziele widerspiegeln, aber Risiken und Experimente zulassen. Beispielsweise können Sie eine Funktion einführen, die die gesamte Ladezeit erhöht, aber versucht, die Benutzerinteraktion zu steigern. (d. h. Wie lange ein Benutzer auf einer Seite oder Website bleibt).

Ein Performance-Budget hilft Ihnen, optimales Verhalten für Ihre aktuellen Benutzer zu schützen, während Sie gleichzeitig neue Märkte erschließen und individuelle Erlebnisse bereitstellen können.

## Siehe auch

- [Starten mit Performance-Budgetierung](https://addyosmani.com/blog/performance-budgets/) von Addy Osmani
- [Performance-Budgets 101](https://web.dev/articles/performance-budgets-101) von Milica Mihajlija
- [Performance-Budgets, die Bestand haben](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) von Tim Kadlec
