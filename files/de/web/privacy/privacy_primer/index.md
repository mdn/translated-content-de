---
title: Datenschutz-Grundlagen
slug: Web/Privacy/Privacy_primer
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Dieser Leitfaden ist eine Einführung in den Datenschutz für Webentwickler. Er bietet einen Überblick über die Prinzipien, die eine Website befolgen muss, um die Privatsphäre ihrer Nutzer zu respektieren.

Er basiert weitgehend auf den Prinzipien, die in der Erklärung der [W3C-Privatsphäre-Prinzipien](https://w3ctag.github.io/privacy-principles/) aufgeführt sind. Anders als dieses Dokument umfasst dieser Leitfaden jedoch nur Prinzipien, die für Webentwickler gelten, nicht für Browser-Entwickler oder Standard-Designer.

Er ist in drei Hauptabschnitte unterteilt:

- [Warum Privatsphäre wichtig ist](#warum_privatsphäre_wichtig_ist)
- [Umgang mit den persönlichen Daten eines Nutzers](#umgang_mit_persönlichen_daten)
- [Nutzererkennung und Tracking](#nutzererkennung_und_tracking)

## Warum Privatsphäre wichtig ist

Die Privatsphäre der Nutzer zu respektieren ist in erster Linie wichtig, weil es aus ethischen Gründen das Richtige ist.

Es ermöglicht Ihnen auch, Vertrauen bei Ihren Nutzern aufzubauen, die Ihre Dienste mehr schätzen werden. Umgekehrt kann die schlechte Publicity, die sich aus Datenschutzverletzungen ergibt, sehr schädlich sein.

Schließlich ist es sehr wahrscheinlich, dass Sie verpflichtet sind, viele der in diesem Artikel aufgeführten Prinzipien zu befolgen, aufgrund von Gesetzen wie der [Datenschutz-Grundverordnung (DSGVO) der Europäischen Union](https://gdpr.eu/) und dem [California Consumer Privacy Act (CCPA)](https://www.oag.ca.gov/privacy/ccpa).

## Umgang mit persönlichen Daten

Websites haben oft ein legitimes Bedürfnis, die persönlichen Daten eines Nutzers zu sammeln und zu verarbeiten. Um die Privatsphäre eines Nutzers zu respektieren, muss eine Website die gesammelten Daten und die Art der Nutzung mit den Absichten des Nutzers in Einklang bringen. Das bedeutet, dass sie nur Daten erfassen sollten, die der Nutzer bereit ist zu teilen, und sie nur in der Weise nutzen sollten, wie der Nutzer es beabsichtigt.

### Persönliche Daten

Persönliche Daten werden in der [Datenschutz-Grundverordnung (DSGVO)](https://gdpr.eu/article-4-definitions/) definiert als:

> jede Information, die sich auf eine identifizierte oder identifizierbare natürliche Person bezieht

Dazu gehören:

- Daten, die direkt zur Identifizierung einer Person genutzt werden können, wie z. B. Namen, Sozialversicherungsnummer, Geburtsdatum oder Adresse.
- Physische Merkmale, wie Körpergröße, Augenfarbe oder ethnische Herkunft.
- Gesellschaftliche Daten wie Religion oder politische Zugehörigkeit.
- Jegliche andere Information, die mit einer Person in Verbindung steht, wie medizinische, finanzielle oder berufliche Informationen.

### Anfordern persönlicher Daten

Websites sollten nur die persönlichen Daten erfassen, die der Nutzer bereit ist, bereitzustellen, und nur die Daten, die sie tatsächlich benötigen. Zum Beispiel könnte ein Shopping-Site ermöglichen, dass Menschen Einkäufe ohne Erstellung eines Kontos tätigen: Dies bedeutet, dass die Site nicht so viele persönliche Daten erfasst und auch die Hürden für Käufer verringert.

Beim Anfordern von Daten sollten Websites:

- Klar erklären, was abgefragt wird und wie es verwendet wird.
- Benutzeroberflächen gestalten, die ehrlich versuchen, die wahren Absichten des Nutzers zu erkennen. Das bedeutet, dass Benutzeroberflächen nicht versuchen sollten, Nutzer zu manipulieren, um mehr Daten zu teilen, als sie wirklich beabsichtigen, z. B. indem es einfacher gemacht wird, Daten zu teilen als nicht zu teilen, oder indem Nutzer gebeten werden, Bedingungen zuzustimmen, die sie nicht erwartet werden könnten zu verstehen.

### Verwendung persönlicher Daten

Websites sollten persönliche Daten nur für die Zwecke verwenden, die sie bei der Anforderung spezifiziert haben.

Wenn möglich, sollten Websites die persönlichen Daten vor der Nutzung so verarbeiten, dass einzelne Nutzer nicht identifizierbar sind: Dieser Vorgang wird Entidentifizierung genannt. Zum Beispiel könnte eine Site nur aggregierte Daten über viele Individuen nutzen und teilen, anstelle einer Sammlung individueller Datenpunkte.

Websites sollten die von ihnen gesammelten persönlichen Daten vor unbefugtem Zugang durch Dritte schützen. Dies bedeutet typischerweise, dass gespeicherte persönliche Daten verschlüsselt werden sollten und persönliche Daten nur über ein sicheres Protokoll wie TLS übertragen werden sollten. Wenn ein unbefugter Zugang festgestellt wird, sollte die Website den Nutzer so schnell wie möglich benachrichtigen.

Websites sollten persönliche Daten löschen, sobald sie sie nicht mehr benötigen.

### Nutzern erlauben, ihre Daten zu verwalten

Websites sollten Nutzern die Möglichkeit geben, die von ihnen bereitgestellten persönlichen Daten zu verwalten. Dies umfasst die Fähigkeit:

- Auf gespeicherte persönliche Daten zuzugreifen, sie zu korrigieren, zu exportieren und zu löschen.
- Jegliche zuvor gegebene Einwilligung bezüglich der Nutzung ihrer Daten zu widerrufen.

Websites sollten es für Nutzer genauso einfach machen, diese Aktionen durchzuführen, wie es für sie war, ihre Daten von vornherein zu teilen. Das heißt, Websites sollten es nicht einfach machen, Daten zu teilen, aber schwer, sie zu löschen.

Websites sollten keine Vergeltungsmaßnahmen gegen Nutzer ergreifen, die diese Rechte ausüben. Zum Beispiel, wenn ein Nutzer die Einwilligung zur Nutzung seiner Daten widerruft und die Website dann den Zugriff auf einen Dienst verweigert, der nicht von diesen Daten abhängig ist, könnte dies als Vergeltungsmaßnahme angesehen werden.

### Veröffentlichung einer Datenschutzrichtlinie

Websites sollten eine Datenschutzrichtlinie veröffentlichen, um Nutzern zu helfen zu verstehen, wie die Site ihre Daten verwenden wird. Die Richtlinie sollte beschreiben:

- Welche persönlichen Daten die Site sammelt.
- Wie die Daten verwendet werden.
- Schritte, die die Site unternimmt, um Daten vor unbefugtem Zugriff zu schützen.
- Alle Dritten, mit denen die Site die Daten teilt, einschließlich einer Erklärung, dass die Site die Einwilligung des Nutzers einholen wird, bevor sie die Daten teilt.
- Die Dauer, für die die Site die Daten aufbewahrt, bevor sie gelöscht werden.
- Wie der Nutzer seine Daten einsehen und verwalten kann.

## Nutzererkennung und Tracking

**Nutzererkennung** ist der Akt der Feststellung, dass eine Identität zu derselben Person gehört wie eine zuvor beobachtete Identität. Websites haben oft ein legitimes Bedürfnis, Nutzer zu erkennen. Zum Beispiel muss eine Bibliothekswebsite dem Nutzer zeigen können, welche Bücher er ausgeliehen hat, und um dies zu tun, müssen sie wissen, dass dieser Nutzer derselbe ist, der diese Bücher ausgeliehen hat. Websites verwenden typischerweise [Cookies](/de/docs/Web/HTTP/Guides/Cookies), um dies umzusetzen.

Das Erkennen eines Nutzers wird manchmal als _Tracking_ eines Nutzers bezeichnet.

### Tracking-Techniken

Websites können verschiedene Techniken verwenden, um Nutzer zu verfolgen. Das W3C-Dokument [Unsanctioned Web Tracking](https://www.w3.org/2001/tag/doc/unsanctioned-tracking/) unterscheidet zwei Kategorien von Techniken:

1. Diejenigen, die auf expliziten Webstandards basieren, wie [Cookies](/de/docs/Web/HTTP/Guides/Cookies) oder anderen [clientseitigen Speicher-APIs](/de/docs/Web/API/Web_Storage_API).
2. Diejenigen, die es nicht sind, wie {{Glossary("fingerprinting", "Fingerabdruckerstellung")}}, die typischerweise Informationen ausnutzen, die von nicht verbundenen Web-APIs durchsickern. Diese zweite Kategorie stellt _nicht genehmigtes Tracking_ dar.

Websites sollten **nur Techniken aus der ersten Kategorie** verwenden, um Nutzer zu verfolgen. Der Grund dafür ist, dass Techniken der ersten Kategorie sichtbar und von Nutzern kontrollierbar sind, entweder direkt im Browser oder über Erweiterungen. Zum Beispiel kann ein Nutzer sehen, welche Cookies gesetzt wurden und sie löschen, oder eine Erweiterung kann automatisch Cookies blockieren oder in bestimmten Situationen löschen.

Selbst wenn einzelne Nutzer diese Kontrollmöglichkeiten nicht ausnutzen, können Datenschutzforscher und -befürworter Tracking, das diese expliziten Techniken nutzt, identifizieren und hervorheben. Dies unterstützt die Entwicklung von Tools und Regelungen, die zum Schutz der Privatsphäre aller Nutzer beitragen können.

Nicht genehmigtes Tracking wird auch manchmal als _verdecktes Tracking_ bezeichnet, um zu betonen, dass es für die Sichtbarkeit und Kontrolle des Nutzers verborgen ist.

### Cross-Context-Tracking

Erkennung kann Verbindungen in demselben Kontext oder in verschiedenen Kontexten verbinden. Ein _Kontext_ wird subjektiv als eine Umgebung definiert, die Nutzer als unterschiedlich von anderen Kontexten betrachten.

Typischerweise entspricht ein Kontext einer {{Glossary("site", "Site")}}, also:

- Wenn eine Site versteht, dass zwei separate Anfragen an sie vom selben Nutzer stammen, stellt das typischerweise eine Erkennung im selben Kontext dar.
- Wenn eine Site versteht, dass eine Anfrage an sie vom selben Nutzer stammt wie eine Anfrage an eine andere Site, stellt das typischerweise eine Erkennung über verschiedene Kontexte hinweg dar.

Das muss jedoch nicht immer der Fall sein, weil die Definition eines Kontexts subjektiv ist: Ein Nutzer könnte zwei Sites als einen einzigen Kontext interpretieren. Zum Beispiel könnte ein Nutzer das "Interagieren mit meiner Bank" als einen einzigen Kontext betrachten, selbst wenn dies die Interaktion mit mehreren Sites umfassen könnte (zum Beispiel `my-bank.example.co.uk` und `my-bank.example.com`).

Um die Privatsphäre eines Nutzers zu respektieren, **sollten Sites Cross-Context-Tracking vermeiden, es sei denn, der Nutzer beabsichtigt, dass es geschieht und kann steuern, ob es geschieht.**

Ein gutes Beispiel für eine Situation, in der Cross-Context-Tracking legitim ist, ist [föderiertes Login](/de/docs/Web/Security/Authentication/Federated_identity), bei dem ein dritter {{Glossary("identity_provider", "Identitätsanbieter")}} einen Nutzer erkennen muss, der versucht, sich bei einer anderen Site anzumelden. In dieser Situation beabsichtigt der Nutzer, dass der Drittanbieter ihn erkennt.

Websites implementieren typischerweise Cross-Context-Tracking mit [Drittanbieter-Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies).

### Tracking-Prävention in Webbrowsern

Die meisten Webbrowser implementieren eine Form von Tracking-Prävention. Obwohl die Details nicht immer gleich sind, folgen Tracking-Präventionsrichtlinien im Großen und Ganzen den oben genannten Prinzipien. Das heißt, Browser versuchen, nicht genehmigtes Tracking so weit wie möglich zu verhindern und alle Cross-Context-Tracking zu unterbinden, außer in bestimmten legitimen Fällen.

Das bedeutet, dass Sites, die die oben aufgeführten Prinzipien befolgen, sicherstellen können, dass sie in so vielen Browsern wie möglich funktionieren.

## Siehe auch

- [Privatsphäre-Prinzipien](https://w3ctag.github.io/privacy-principles/#dfn-context) (W3C)
- [Learn Privacy](https://web.dev/learn/privacy) (web.dev)
