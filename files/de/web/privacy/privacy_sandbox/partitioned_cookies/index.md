---
title: Cookies mit unabhängigem partitioniertem Zustand (CHIPS)
slug: Web/Privacy/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

**Cookies mit unabhängigem partitioniertem Zustand** (**CHIPS**, auch bekannt als **partitionierte Cookies**) ermöglichen es Entwicklern, ein Cookie in partitionierten Speicher zu überführen, mit einem separaten Cookie-Speicher für jede oberste Website.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies Dienste ermöglichen, Nutzer zu verfolgen und Informationen über nicht zusammenhängende oberste Websites hinweg zu verknüpfen. Cookies, die als `Partitioned` gekennzeichnet sind, sind doppelt schlüsselbar: durch den Ursprung, der sie setzt _und_ den Ursprung der obersten Webseite.

Das bedeutet, dass sie nur im Kontext der obersten Webseite gelesen werden können, auf der sie gesetzt wurden. Dies ermöglicht es, das plattformübergreifende Tracking zu blockieren, während legitime Nutzungen von Drittanbieter-Cookies wie die Beibehaltung des Zustands von eingebetteten Karten oder Chat-Widgets über eine Domain und ihre Subdomains sowie die Beibehaltung von Konfigurationsinformationen für das Subresource-Load-Balancing von CDNs und Anbieter von Headless-CMS zu ermöglichen.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, betrachten wir ein kurzes Beispiel. Historisch betrachtet, wenn eine Seite Inhalte über ein {{htmlelement("iframe")}} einbettet, konnte der eingebettete Inhalt ein Cookie auf dem Gerät des Nutzers in Reaktion auf die plattformübergreifende Anfrage setzen. Besucht der Nutzer andere Seiten, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf das gleiche ursprünglich gesetzte Cookie zugreifen. Dies ermöglicht es dem Inhaltsanbieter, die Nutzeraktivität über diese Seiten hinweg zu verfolgen und auch über andere Seiten, die denselben Inhalt einbetten.

Zum Beispiel:

1. Ein Nutzer besucht `https://site-a.example`, welche Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers.
2. Der Nutzer besucht `https://site-b.example`, die ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Nutzer auf der vorherigen Seite war.

Dies funktioniert, weil Cookies historisch mit einem Schlüssel basierend auf dem Host- oder Domainnamen der Seite, die sie gesetzt hat, gespeichert wurden, bekannt als **Hostschlüssel**. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es Seiteninhabern ermöglicht, sich für die Nutzung von CHIPS zu entscheiden:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host`-Präfix verwenden, wenn Sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden, und dies wird empfohlen, wenn Sie keine Cookies zwischen Subdomains teilen müssen.

Mit `Partitioned` gesetzt, werden Drittanbieter-Cookies mit zwei Schlüsseln gespeichert, dem Hostschlüssel und einem neuen **Partitionsschlüssel**. Der Partitionsschlüssel basiert auf dem Schema und dem {{Glossary("eTLD", "eTLD+1")}} der URL der obersten Ebene, die der Browser besuchte, als die Anfrage an die URL gesendet wurde, die das Cookie setzte.

Unser Beispiel noch einmal aufgreifend:

1. Ein Nutzer besucht `https://site-a.example`, welche Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers unter Verwendung von `Partitioned`, was bedeutet, dass der Seiteninhaber sich für CHIPS entscheidet.
2. Der Speicherschlüssel für das Cookie wäre nun `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Nutzer `https://site-b.example` besucht, die ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, da der Partitionsschlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ist ähnlich dem [Zustandspartitionierungsmechanismus](/de/docs/Web/Privacy/State_Partitioning), der von Firefox implementiert wurde. Der Unterschied besteht darin, dass die Zustandspartitionierung die Speicherung und Abrufung von Cookies in separate Cookie-Speicher für jede Top-Level-Website aufteilt, ohne eine Möglichkeit zur Verfügung zu stellen, sich bei Bedarf für Drittanbieter-Cookies zu entscheiden. Da Browser beginnen, die Nutzung von Drittanbieter-Cookies auslaufen zu lassen, gibt es dennoch berechtigte, nicht verfolgungsbezogene Verwendungszwecke von Drittanbieter-Cookies, die weiterhin zulässig sein müssen, während Entwickler beginnen, diese Änderung zu behandeln.

## CHIPS und Subdomains

CHIPS erlaubt es immer noch, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Seite eingebettet sind, auf Drittanbieter-Cookies zugreifen, die von diesen Inhalten gesetzt wurden. Schauen wir uns ein Beispiel für eine Einzelhandelsseite an, die einen Drittanbieter-Chat-Service nutzt:

1. Ein Nutzer besucht `https://shoppy.example`, welche einen Drittanbieter-Chat-Service von `https://3rd-party.example/chat` einbettet, um Unterstützung für Nutzer zu bieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Nutzers mit `Partitioned`, um den Zustand des Chats über verschiedene Subdomains der Seite hinweg beizubehalten.
2. Der Speicherschlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Nutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partitionsschlüssel weiterhin übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies Having Independent Partitioned State (CHIPS)](https://developers.google.com/privacy-sandbox/cookies/chips) auf developers.google.com
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)

<section id="Quick_links">
{{ListSubpages("/de/docs/Web/Privacy", "2", "0", "0")}}
</section>
