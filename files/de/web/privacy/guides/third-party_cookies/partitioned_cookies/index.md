---
title: Cookies Having Independent Partitioned State (CHIPS)
short-title: CHIPS
slug: Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

**Cookies Having Independent Partitioned State** (**CHIPS**, auch bekannt als **Partitionierte Cookies**) ermöglicht Entwicklern, ein Cookie für partitionierten Speicher auszuwählen, mit einem separaten Cookie-Speicher pro Top-Level-Site.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies es Diensten ermöglichen, Benutzer zu verfolgen und ihre Informationen über nicht verwandte Top-Level-Sites hinweg zu verknüpfen. Cookies, die mit `Partitioned` gekennzeichnet sind, sind doppelt gekennzeichnet: durch den Ursprungsort, der sie setzt _und_ den Ursprung der Top-Level-Seite.

Dies bedeutet, dass sie nur im Kontext der Top-Level-Site gelesen werden können, auf der sie gesetzt wurden. Dies ermöglicht es, das Cross-Site-Tracking zu blockieren, während immer noch legitime Verwendungen von Drittanbieter-Cookies wie das Persistieren des Zustands eingebetteter Karten oder Chat-Widgets über eine Domain und ihre Subdomains hinweg ermöglicht werden sowie das Persistieren von Konfigurationsinformationen für Subresource-CDN-Load-Balancing und Headless-CMS-Anbieter.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, schauen wir uns ein kurzes Beispiel an. Historisch gesehen, wenn eine Site Inhalte über ein {{htmlelement("iframe")}} einbettet, konnten die eingebetteten Inhalte ein Cookie auf dem Gerät des Benutzers als Antwort auf die Cross-Site-Anfrage setzen. Wenn der Benutzer andere Sites besucht, die denselben Inhalt einbetten, können die eingebetteten Inhalte auf dasselbe Cookie zugreifen, das ursprünglich von der ersten Instanz des eingebetteten Inhalts gesetzt wurde. Dies ermöglicht es dem Inhaltseigentümer, die Benutzeraktivität über diese Sites hinweg zu verfolgen sowie über andere Sites, die denselben Inhalt einbetten.

Zum Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers.
2. Der Benutzer besucht `https://site-b.example`, das ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Benutzer auf der vorherigen Seite war.

Dies funktioniert, weil Cookies historisch gesehen mit einem Schlüssel gespeichert wurden, der basierend auf dem Host- oder Domainnamen der Site, die sie gesetzt hat, erstellt wurde, auch bekannt als **Host-Schlüssel**. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert werden.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es Site-Eigentümern ermöglicht, sich für die Verwendung von CHIPS zu entscheiden:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host`-Präfix verwenden, wenn Sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden. Dies wird empfohlen, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit gesetztem `Partitioned` werden Drittanbieter-Cookies mit zwei Schlüsseln gespeichert, dem Host-Schlüssel und einem neuen **Partitionierungs-Schlüssel**. Der Partitionierungsschlüssel basiert auf der {{Glossary("site", "Site")}}, einschließlich des Schemas der Top-Level-URL, die der Browser besuchte, als die Anfrage an den URL-Endpunkt gesendet wurde, der das Cookie gesetzt hat.

Zurück zu unserem Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, was bedeutet, dass sich der Site-Inhaber für CHIPS entscheidet.
2. Der Speicherschlüssel für das Cookie wäre jetzt `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Benutzer `https://site-b.example` besucht, das ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, weil der Partitionierungsschlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ist ähnlich dem [State Partitioning Mechanismus](/de/docs/Web/Privacy/Guides/State_Partitioning), der von Firefox implementiert wurde. State Partitioning partitioniert jedoch standardmäßig die Speicherung von Cookies für Drittanbieter-Kontexte, während CHIPS die Opt-in-Option für partitionierte Cookies sowohl für Erstanbieter- als auch für Drittanbieter-Kontexte ermöglicht. Es wird empfohlen, sich für den Opt-in-Mechanismus von CHIPS zu entscheiden, um die kompatibelsten partitionierten Cookies zu bieten.

## CHIPS und Subdomains

CHIPS erlaubt es weiterhin, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Site eingebettet sind, auf Drittanbieter-Cookies zugreifen können, die von diesen Inhalten gesetzt wurden. Schauen wir uns ein Beispiel für eine Einzelhandelsseite an, die einen Drittanbieter-Chat-Dienst verwendet:

1. Ein Benutzer besucht `https://shoppy.example`, das einen Drittanbieter-Chat-Dienst von `https://3rd-party.example/chat` einbettet, um Support für Benutzer zu bieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, um den Zustand des Chats über verschiedene Subdomains der Site hinweg zu bewahren.
2. Der Speicherschlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Benutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partitionierungsschlüssel weiterhin übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies Having Independent Partitioned State (CHIPS)](https://privacysandbox.google.com/cookies/chips) auf privacysandbox.google.com
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)
