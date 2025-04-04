---
title: Cookies mit unabhängigem partitioniertem Zustand (CHIPS)
short-title: CHIPS
slug: Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: a6c32a2d0add510c95ef74e85bd8e17551d508b6
---

**Cookies mit unabhängigem partitioniertem Zustand** (**CHIPS**, auch bekannt als **Partitionierte Cookies**) ermöglicht es Entwicklern, ein Cookie in partitionierten Speicher zu integrieren, mit einem separaten Cookie-Container pro oberste Ebene einer Website.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies Dienste in die Lage versetzen, Nutzer zu verfolgen und deren Informationen über nicht verwandte Top-Level-Websites hinweg zu verknüpfen. Cookies, die als `Partitioned` gekennzeichnet sind, werden doppelt verknüpft: durch die Herkunft, die sie setzt _und_ die Herkunft der obersten Seite.

Das bedeutet, dass sie nur im Kontext der obersten Website gelesen werden können, auf der sie gesetzt wurden. Dies ermöglicht es, Cross-Site-Tracking zu blockieren, während legitime Verwendungen von Drittanbieter-Cookies, wie das Speichern des Zustands eingebetteter Karten oder Chat-Widgets über eine Domain und ihre Subdomains oder das Speichern von Konfigurationsinformationen für Subressourcen-CDN-Lastverteilung und Headless-CMS-Anbieter, weiterhin möglich sind.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, schauen wir uns ein kurzes Beispiel an. Historisch gesehen konnte ein auf einer Website eingebetteter Inhalt über ein {{htmlelement("iframe")}} ein Cookie auf dem Gerät des Nutzers als Reaktion auf die Cross-Site-Anfrage setzen. Besucht der Nutzer andere Websites, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich von der ersten Instanz des eingebetteten Inhalts gesetzt wurde. Dies ermöglicht es dem Inhaltsanbieter, die Nutzeraktivität über diese Websites und andere, die denselben Inhalt einbetten, zu verfolgen.

Zum Beispiel:

1. Ein Nutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers.
2. Der Nutzer besucht `https://site-b.example`, die ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als sich der Nutzer auf der vorherigen Seite befand.

Das funktioniert, weil Cookies historisch mit einem Schlüssel basierend auf dem Host- oder Domainnamen der Website, die sie gesetzt hat, aka dem **Host Key**, gespeichert wurden. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert werden.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es Website-Betreibern ermöglicht, die Nutzung von CHIPS zu erlauben:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host`-Präfix verwenden, wenn Sie partitionierte Cookies setzen, um diese nur an die aktuelle Domain oder Subdomain zu binden; dies wird empfohlen, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit `Partitioned` gesetzt, werden Drittanbieter-Cookies unter Verwendung von zwei Schlüsseln gespeichert, dem Host Key und einem neuen **Partition Key**. Der Partition Key basiert auf dem Schema und {{Glossary("eTLD", "eTLD+1")}} der obersten URL, die der Browser beim Anfragezeitpunkt besuchte, die das Cookie gesetzt hat.

Zurück zu unserem Beispiel:

1. Ein Nutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers unter Verwendung von `Partitioned`, d.h. der Website-Betreiber stimmt der Nutzung von CHIPS zu.
2. Der Speicherschlüssel für das Cookie wäre jetzt `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Nutzer `https://site-b.example` besucht, die ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, weil der Partition Key nicht übereinstimmt.

> [!NOTE]
> CHIPS ähnelt dem von Firefox implementierten [Zustandspartitionierungsmechanismus](/de/docs/Web/Privacy/Guides/State_Partitioning). Der Unterschied besteht darin, dass die Zustandspartitionierung die Speicherung und den Abruf von Cookies in getrennten Cookie-Behältern für jede oberste Website partitioniert, ohne eine Möglichkeit, sich bei der Nutzung von Drittanbieter-Cookies zu registrieren, wenn dies gewünscht ist. Während Browser beginnen, die Verwendung von Drittanbieter-Cookies auslaufen zu lassen, gibt es immer noch gültige, nicht-verfolgende Verwendungen von Drittanbieter-Cookies, die erlaubt werden müssen, während Entwickler beginnen, diese Änderung zu bewältigen.

## CHIPS und Subdomains

CHIPS ermöglicht es immer noch, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Website eingebettet sind, auf Drittanbieter-Cookies zugreifen können, die von diesem Inhalt gesetzt wurden. Schauen wir uns ein Beispiel einer Einzelhandelswebsite an, die einen Drittanbieter-Chat-Dienst nutzt:

1. Ein Nutzer besucht `https://shoppy.example`, die einen Drittanbieter-Chat-Dienst von `https://3rd-party.example/chat` einbettet, um Unterstützung für Nutzer anzubieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Nutzers unter Verwendung von `Partitioned`, um den Zustand des Chats über verschiedene Subdomains der Website hinweg aufrechtzuerhalten.
2. Der Speicherschlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Nutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, darunter `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partition Key weiterhin übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies mit unabhängigem partitioniertem Zustand (CHIPS)](https://privacysandbox.google.com/cookies/chips) auf privacysandbox.google.com
- [CHIPS Erklärer](https://github.com/privacycg/CHIPS)
