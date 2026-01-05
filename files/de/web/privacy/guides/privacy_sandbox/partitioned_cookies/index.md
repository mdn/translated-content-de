---
title: Cookies Having Independent Partitioned State (CHIPS)
short-title: CHIPS
slug: Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: d7a0ef33dfce20818a160557b5a72d6565cec254
---

**Cookies Having Independent Partitioned State** (**CHIPS**, auch bekannt als **partitionierte Cookies**) ermöglichen es Entwicklern, ein Cookie in einen partitionierten Speicher zu integrieren, wobei ein separates Cookie-Jar pro Top-Level-Site verwendet wird.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies Dienste in die Lage versetzen, Benutzer zu verfolgen und ihre Informationen über nicht miteinander verbundene Top-Level-Sites hinweg zu assoziieren. Cookies, die als `Partitioned` gekennzeichnet sind, sind doppelt getreu: nach dem Ursprung, der sie setzt, _und_ dem Ursprung der Top-Level-Seite.

Das bedeutet, dass sie nur im Kontext der Top-Level-Site gelesen werden können, auf der sie gesetzt wurden. Dies blockiert Cross-Site-Tracking, ermöglicht jedoch weiterhin legitime Verwendungen von Drittanbieter-Cookies wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über eine Domain und ihre Subdomains hinweg sowie das Speichern von Konfigurationsinformationen für Subresource-CDN-Load-Balancing und Headless-CMS-Anbieter.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, betrachten wir ein kurzes Beispiel. Historisch gesehen, wenn eine Site Inhalte über ein {{htmlelement("iframe")}} einbettet, konnte der eingebettete Inhalt als Reaktion auf die Cross-Site-Anfrage ein Cookie auf dem Gerät des Benutzers setzen. Wenn der Benutzer andere Sites besucht, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich von der ersten Instanz des eingebetteten Inhalts gesetzt wurde. Dies ermöglicht es dem Inhaltsanbieter, Benutzeraktivitäten auf diesen und anderen Sites zu verfolgen, die denselben Inhalt einbetten.

Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers.
2. Der Benutzer besucht `https://site-b.example`, die ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Benutzer auf der vorherigen Seite war.

Dies funktioniert, weil Cookies historisch gesehen mit einem Schlüssel gespeichert wurden, der auf dem Host- oder Domainnamen der Site basiert, die sie gesetzt hat, auch bekannt als **Host-Schlüssel**. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das bei Setzung es Site-Besitzern ermöglicht, sich für die Verwendung von CHIPS zu entscheiden:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host`-Präfix verwenden, wenn Sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden. Dies wird empfohlen, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit `Partitioned` gesetzten Cookies werden Drittanbieter-Cookies mithilfe von zwei Schlüsseln gespeichert, dem Host-Schlüssel und einem neuen **Partition-Schlüssel**. Der Partition-Schlüssel basiert auf der {{Glossary("site", "Site")}}, einschließlich des Schemas, der Top-Level-URL, die der Browser besuchte, als die Anfrage an den URL-Endpunkt gestellt wurde, der das Cookie gesetzt hat.

Zurück zu unserem Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers unter Verwendung von `Partitioned`, was bedeutet, dass der Site-Inhaber sich für CHIPS entscheidet.
2. Der Speicherschlüssel für das Cookie wäre nun `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Benutzer `https://site-b.example` besucht, die ebenfalls `https://3rd-party.example` einbettet, kann die neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, da der Partition-Schlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ähnelt dem von Firefox implementierten [Zustandspartitionierungsmechanismus](/de/docs/Web/Privacy/Guides/State_Partitioning). Der Unterschied besteht darin, dass die Zustandspartitionierung die Cookie-Speicherung standardmäßig für Drittanbieter-Kontexte aufteilt, während CHIPS ein Opt-in für partitionierte Cookies für sowohl Erst- als auch Drittanbieter-Kontexte erlaubt. Es wird empfohlen, den Opt-in-Mechanismus von CHIPS anstelle der Zustandspartitionierung zu verwenden, um die kompatibelsten partitionierten Cookies bereitzustellen.

## CHIPS und Subdomains

CHIPS ermöglicht es weiterhin, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Site eingebettet sind, auf Drittanbieter-Cookies zugreifen, die von diesen Inhalten gesetzt wurden. Betrachten wir ein Einzelhandels-Website-Beispiel, das einen Drittanbieter-Chatdienst verwendet:

1. Ein Benutzer besucht `https://shoppy.example`, die einen Drittanbieter-Chat-Service von `https://3rd-party.example/chat` einbettet, um Unterstützung für Benutzer bereitzustellen, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Benutzers unter Verwendung von `Partitioned`, um den Zustand des Chats über verschiedene Site-Subdomains hinweg aufrechtzuerhalten.
2. Der Speicherschlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Benutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partition-Schlüssel weiterhin übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies Having Independent Partitioned State (CHIPS)](https://privacysandbox.google.com/cookies/chips) auf privacysandbox.google.com
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)
