---
title: Einführung in den Datenschutz
slug: Web/Privacy/Privacy_primer
l10n:
  sourceCommit: c9a52b432ec4063da2d0a1c06f4b8a363843e7b7
---

Dieser Leitfaden ist eine Einführung in den Datenschutz für Webentwickler. Er bietet einen Überblick über die Prinzipien, die eine Website befolgen muss, um die Privatsphäre ihrer Benutzer zu respektieren.

Der Leitfaden basiert weitgehend auf den Prinzipien, die im Dokument [W3C Privacy Principles](https://www.w3.org/TR/privacy-principles/) aufgeführt sind, aber im Gegensatz zu diesem Dokument behandelt dieser Leitfaden nur Prinzipien, die für Webentwickler gelten und nicht diejenigen, die für Browserentwickler oder Standarddesigner relevant sind.

Er ist in drei Hauptabschnitte unterteilt:

- [Warum Datenschutz wichtig ist](#warum_datenschutz_wichtig_ist)
- [Arbeiten mit den persönlichen Daten eines Benutzers](#arbeiten_mit_persönlichen_daten)
- [Benutzererkennung und Tracking](#benutzererkennung_und_tracking)

## Warum Datenschutz wichtig ist

Die Privatsphäre Ihrer Nutzer zu respektieren ist in erster Linie wichtig, weil es ethisch das Richtige ist.

Außerdem ermöglicht es Ihnen, Vertrauen bei Ihren Nutzern aufzubauen, die Ihre Dienstleistungen mehr schätzen werden. Umgekehrt kann die schlechte Öffentlichkeitsarbeit, die aus Datenschutzverletzungen entsteht, sehr schädlich sein.

Schließlich ist es sehr wahrscheinlich, dass Sie aufgrund von Gesetzen wie der [Datenschutz-Grundverordnung (DSGVO) der Europäischen Union](https://gdpr.eu/) und dem [California Consumer Privacy Act (CCPA)](https://www.oag.ca.gov/privacy/ccpa) _verpflichtet_ sind, viele der in diesem Artikel aufgeführten Prinzipien zu befolgen.

## Arbeiten mit persönlichen Daten

Websites haben oft ein berechtigtes Bedürfnis, die persönlichen Daten eines Nutzers zu sammeln und zu verarbeiten. Um die Privatsphäre eines Nutzers zu respektieren, muss eine Website die gesammelten Daten und deren Verwendung mit den Absichten des Nutzers in Einklang bringen. Das heißt, sie sollten nur Daten sammeln, die der Nutzer zu teilen beabsichtigt, und sie nur auf die Art und Weise verwenden, die der Nutzer beabsichtigt.

### Persönliche Daten

Persönliche Daten werden in der [Datenschutz-Grundverordnung (DSGVO)](https://gdpr.eu/article-4-definitions/) definiert als:

> alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen

Dazu gehören:

- Daten, die direkt zur Identifizierung einer Person genutzt werden können, wie z.B. Name, Sozialversicherungsnummer, Geburtsdatum oder Adresse.
- Physische Merkmale wie Größe, Augenfarbe oder Ethnie.
- Gesellschaftliche Daten wie Religion oder politische Zugehörigkeit.
- Alle anderen Informationen, die mit einer Person assoziiert sind, wie medizinische, finanzielle oder Beschäftigungsinformationen.

### Anfrage personenbezogener Daten

Websites sollten nur die personenbezogenen Daten sammeln, die der Benutzer bereitstellen möchte, und nur die Daten sammeln, die sie tatsächlich benötigen. Zum Beispiel könnte eine Shopping-Website es Menschen ermöglichen, Einkäufe zu tätigen, ohne ein Konto zu erstellen: Das bedeutet, dass die Website nicht so viele personenbezogene Daten sammelt und gleichzeitig die Reibung für Käufer reduziert.

Bei der Anforderung von Daten sollten Websites:

- Klar erklären, was sie anfordern und wie es verwendet wird.
- Benutzeroberflächen gestalten, die ehrlich versuchen, die wahren Absichten des Benutzers zu entdecken. Das bedeutet, dass Benutzeroberflächen nicht versuchen sollten, Benutzer zu manipulieren, um mehr Daten zu teilen, als sie wirklich möchten, zum Beispiel, indem es einfacher gemacht wird, Daten zu teilen, als sie nicht zu teilen, oder indem Benutzer dazu gebracht werden, Bedingungen zuzustimmen, die sie nicht verstehen können.

### Verwendung personenbezogener Daten

Websites sollten personenbezogene Daten nur für die Zwecke verwenden, die sie angegeben haben, als sie sie angefordert haben.

Wenn möglich, sollten Websites die personenbezogenen Daten vor ihrer Verwendung so verarbeiten, dass einzelne Benutzer nicht identifizierbar sind: Dieser Prozess wird als _De-Identifikation_ bezeichnet. Eine Website könnte beispielsweise nur aggregierte Daten verwenden und weitergeben, die über viele Einzelpersonen gesammelt wurden, anstatt eine Sammlung einzelner Datenpunkte.

Websites sollten die personenbezogenen Daten, die sie sammeln, vor unbefugtem Zugriff durch Dritte schützen. Das bedeutet typischerweise, dass gespeicherte personenbezogene Daten verschlüsselt werden sollten und dass personenbezogene Daten nur mit einem sicheren Protokoll wie TLS übertragen werden sollten. Wenn ein unbefugter Zugriff erkannt wird, sollte die Website den Benutzer so schnell wie möglich benachrichtigen.

Websites sollten personenbezogene Daten löschen, sobald sie diese nicht mehr benötigen.

### Ermöglichung der Verwaltung persönlicher Daten durch Benutzer

Websites sollten es Benutzern ermöglichen, die persönlichen Daten, die sie bereitgestellt haben, zu verwalten. Dazu gehört die Möglichkeit:

- Auf alle gespeicherten persönlichen Daten zuzugreifen, sie zu korrigieren, zu exportieren und zu löschen.
- Jegliche Einwilligung über die Verwendung ihrer Daten zu widerrufen.

Websites sollten es Benutzern ebenso einfach machen, diese Aktionen durchzuführen, wie es ihnen leicht fällt, ihre Daten in erster Linie zu teilen. Das heißt, Websites sollten es Nutzern nicht leicht machen, Daten zu teilen, aber schwer, sie zu löschen.

Websites sollten nicht gegen Benutzer vorgehen, die diese Rechte ausüben. Wenn ein Benutzer beispielsweise die Zustimmung zur Verwendung seiner Daten widerruft und die Website dann den Zugriff auf einen Dienst verweigert, der nicht von diesen Daten abhängt, könnte dies als Repressalie betrachtet werden.

### Veröffentlichung einer Datenschutzrichtlinie

Websites sollten eine Datenschutzrichtlinie veröffentlichen, um den Benutzern zu helfen, zu verstehen, wie die Website ihre Daten verwenden wird. Die Richtlinie sollte beschreiben:

- Welche persönlichen Daten die Website sammelt.
- Wie die Daten verwendet werden.
- Welche Schritte die Website unternimmt, um Daten vor unbefugtem Zugriff zu schützen.
- Mit welchen Drittparteien die Website die Daten teilen wird, einschließlich einer Erklärung, dass die Website vor dem Teilen die Zustimmung der Benutzer einholen wird.
- Wie lange die Website die Daten behalten wird, bevor sie gelöscht werden.
- Wie der Benutzer seine Daten ansehen und verwalten kann.

## Benutzererkennung und Tracking

**Benutzererkennung** ist der Akt des Erkennens, dass eine Identität derselben Person gehört wie eine zuvor beobachtete Identität. Websites haben oft ein berechtigtes Bedürfnis, Benutzer zu erkennen. Ein Beispiel dafür ist eine Bibliothekswebsite, die dem Benutzer anzeigen muss, welche Bücher er ausgeliehen hat. Dazu muss die Website wissen, dass dieser Benutzer derselbe ist, der diese Bücher ausgeliehen hat. Websites verwenden typischerweise [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um dies zu implementieren.

Das Erkennen eines Benutzers wird manchmal als _Tracking_ eines Benutzers bezeichnet.

### Tracking-Techniken

Websites können verschiedene Techniken verwenden, um Benutzer zu verfolgen. Das W3C-Dokument [Unsanctioned Web Tracking](https://www.w3.org/2001/tag/doc/unsanctioned-tracking/) unterscheidet zwei Kategorien von Techniken:

1. Techniken, die auf expliziten Webstandards basieren, wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder andere [client-side storage APIs](/de/docs/Web/API/Web_Storage_API).
2. Techniken, die es nicht tun, wie {{Glossary("fingerprinting", "Fingerprinting")}}, die typischerweise Informationen nutzen, die von nicht zusammenhängenden Web-APIs offengelegt werden. Diese zweite Kategorie stellt _unsanktioniertes Tracking_ dar.

Websites sollten **nur Techniken der ersten Kategorie** verwenden, um Benutzer zu verfolgen. Der Grund dafür ist, dass Techniken in der ersten Kategorie für Benutzer sichtbar und kontrollierbar sind, sei es direkt im Browser oder über Erweiterungen. Ein Benutzer kann beispielsweise sehen, welche Cookies gesetzt wurden, und sie löschen, oder eine Erweiterung kann automatisch Cookies blockieren oder in bestimmten Situationen löschen.

Selbst wenn einzelne Benutzer diese Kontrollmöglichkeiten nicht wahrnehmen, können Datenschutzforscher und -befürworter Tracking, das diese expliziten Techniken verwendet, identifizieren und hervorheben. Das hilft bei der Entwicklung von Werkzeugen und Vorschriften, die dazu beitragen können, die Privatsphäre aller Benutzer zu schützen.

Unsanktioniertes Tracking wird auch manchmal als _verdecktes Tracking_ bezeichnet, um zu betonen, dass es der Sichtbarkeit und Kontrolle des Benutzers entzogen ist.

### Cross-Context-Tracking

Die Erkennung kann Beobachtungen im gleichen Kontext miteinander verbinden oder Beobachtungen in verschiedenen Kontexten miteinander verbinden. Ein _Kontext_ ist subjektiv als eine Umgebung definiert, die Benutzer als andersartig im Vergleich zu anderen Kontexten betrachten.

Typischerweise entspricht ein Kontext einer {{Glossary("site", "Site")}}, daher:

- Eine Site, die versteht, dass zwei separate Anfragen an sich selbst vom gleichen Benutzer stammen, stellt typischerweise eine Erkennung im gleichen Kontext dar.
- Eine Site, die versteht, dass eine Anfrage an sich selbst vom gleichen Benutzer stammt wie eine Anfrage an eine andere Site, stellt typischerweise eine Erkennung über Kontexte hinweg dar.

Dies ist jedoch nicht notwendigerweise der Fall, da die Definition eines Kontextes subjektiv ist: Ein Benutzer könnte zwei Sites als einen einzigen Kontext betrachten. Beispielsweise könnte ein Benutzer "Interaktion mit meiner Bank" als einen einzigen Kontext verstehen, auch wenn dies die Interaktion mit mehreren Sites beinhaltet (zum Beispiel `meine-bank.beispiel.de` und `meine-bank.beispiel.com`).

Um die Privatsphäre eines Nutzers zu respektieren, **sollten Sites Cross-Context-Tracking vermeiden, es sei denn, der Nutzer beabsichtigt, dass es geschieht, und kann kontrollieren, ob es geschieht.**

Ein gutes Beispiel für eine legitime Cross-Context-Tracking-Situation ist der [federierte Login](/de/docs/Web/Security/Authentication/Federated_identity), bei dem ein Drittanbieter {{Glossary("identity_provider", "Identity Provider")}} einen Benutzer erkennen muss, der versucht, sich bei einer anderen Site anzumelden. In diesem Fall möchte der Benutzer, dass der Drittanbieter ihn erkennt.

Websites implementieren typischerweise Cross-Context-Tracking unter Verwendung von [Third-Party-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

### Tracking-Prävention in Webbrowsern

Die meisten Webbrowser implementieren eine Form der Tracking-Prävention. Obwohl die Details nicht immer gleich sind, folgen die Richtlinien zur Verhinderung von Tracking im Allgemeinen den oben skizzierten Prinzipien. Das heißt, Browser versuchen, unsanktioniertes Tracking so weit wie möglich zu verhindern und alle Kontexte übergreifendes Tracking, außer in spezifischen legitimen Fällen.

Das bedeutet, dass Websites, die die oben genannten Prinzipien befolgen, sicherstellen können, dass sie in möglichst vielen Browsern funktionieren.

## Siehe auch

- [Privacy principles](https://www.w3.org/TR/privacy-principles/#dfn-context) (W3C)
- [Learn Privacy](https://web.dev/learn/privacy) (web.dev)
