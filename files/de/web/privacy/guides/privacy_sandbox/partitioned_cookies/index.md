---
title: Cookies Having Independent Partitioned State (CHIPS)
short-title: CHIPS
slug: Web/Privacy/Guides/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

**Cookies Having Independent Partitioned State** (**CHIPS**, auch bekannt als **partitionierte Cookies**) erlaubt Entwicklern, ein Cookie für eine partitionierte Speicherung zu kennzeichnen, mit einem separaten Cookie-Speicherbereich pro Top-Level-Site.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies es Diensten ermöglichen, Benutzer zu verfolgen und ihre Informationen über nicht verwandte Top-Level-Sites hinweg zu assoziieren. Cookies, die als `Partitioned` markiert sind, sind doppelt verschlüsselt: durch den Ursprung, der sie setzt _und_ den Ursprung der Top-Level-Seite.

Das bedeutet, sie können nur im Kontext der Top-Level-Site gelesen werden, auf der sie gesetzt wurden. Dies ermöglicht, das Cross-Site-Tracking zu blockieren, während weiterhin legitime Zwecke von Drittanbieter-Cookies, wie das Beibehalten des Zustands eingebetteter Karten oder Chat-Widgets über eine Domain und ihre Subdomains hinweg, sowie das Händeln von Konfigurationsinformationen für Subresource-CDN-Load-Balancing und Headless CMS-Anbieter, ermöglicht werden.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, schauen wir uns ein kurzes Beispiel an. Historisch gesehen konnte, wenn eine Seite Inhalte über ein {{htmlelement("iframe")}} einbettet, der eingebettete Inhalt ein Cookie auf dem Gerät des Nutzers als Antwort auf die Cross-Site-Anfrage setzen. Wenn der Nutzer andere Seiten besucht, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich von der ersten Instanz des eingebetteten Inhalts gesetzt wurde. Dadurch kann der Inhaltsanbieter die Benutzeraktivität über diese Seiten und alle anderen Seiten, die denselben Inhalt einbetten, verfolgen.

Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, welches Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers.
2. Der Benutzer besucht `https://site-b.example`, das ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzte wurde, als der Benutzer auf der vorherigen Seite war.

Dies funktioniert, da Cookies historisch mit einem Schlüssel basierend auf dem Host oder dem Domainnamen der Seite, die sie gesetzt hat, aka dem **Host-Schlüssel**, gespeichert wurden. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es Seiteninhabern ermöglicht, sich für die Nutzung von CHIPS zu entscheiden:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host` Präfix verwenden, wenn Sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden, und dies wird empfohlen, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit gesetztem `Partitioned` werden Drittanbieter-Cookies mit zwei Schlüsseln gespeichert, dem Host-Schlüssel und einem neuen **Partitionierungs-Schlüssel**. Der Partitionierungs-Schlüssel basiert auf dem Schema und {{Glossary("eTLD", "eTLD+1")}} der Top-Level-URL, die der Browser besuchte, als die Anfrage an den URL-Endpunkt, der das Cookie gesetzt hat, gemacht wurde.

Unser Beispiel erneut besprochen:

1. Ein Benutzer besucht `https://site-a.example`, welches Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Nutzers unter Nutzung von `Partitioned`, was bedeutet, dass der Seiteninhaber sich für CHIPS entscheidet.
2. Der Speicher-Schlüssel für das Cookie wäre nun `{("https://site-a.example"), ("3rd-party.example")}}`.
3. Wenn der Benutzer `https://site-b.example` besucht, das ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, weil der Partitionierungs-Schlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ähnelt dem [Status-Partitionierungsmechanismus](/de/docs/Web/Privacy/Guides/State_Partitioning), der von Firefox implementiert wurde. Der Unterschied ist, dass die Status-Partitionierung die Speicherung und Abrufung von Cookies in separate Cookie-Töpfe für jede Top-Level-Site aufteilt, ohne eine Mechanismus zur Verfügung zu stellen, mit dem sich Drittanbieter-Cookies bei Bedarf aktivieren lassen. Da Browser beginnen, die Nutzung von Drittanbieter-Cookies zu beenden, gibt es immer noch gültige, nicht-verfolgende Anwendungen von Drittanbieter-Cookies, die erlaubt werden müssen, während Entwickler beginnen, mit dieser Änderung umzugehen.

## CHIPS und Subdomains

CHIPS erlaubt es immer noch, dass eingebettete Drittanbieter-Inhalte über verschiedene Subdomains einer Site hinweg auf von diesen Inhalten gesetzte Drittanbieter-Cookies zugreifen. Schauen wir uns ein Beispiel einer Handelsseite an, die einen Drittanbieter-Chat-Service nutzt:

1. Ein Benutzer besucht `https://shoppy.example`, das einen Drittanbieter-Chat-Service von `https://3rd-party.example/chat` einbettet, um Unterstützung für Benutzer anzubieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Nutzers unter Verwendung von `Partitioned`, um den Zustand des Chats über verschiedene Subdomains der Site hinweg beizubehalten.
2. Der Speicher-Schlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}}`.
3. Der Benutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, weil der Partitionierungs-Schlüssel immer noch übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Cookies Having Independent Partitioned State (CHIPS)](https://developers.google.com/privacy-sandbox/cookies/chips) auf developers.google.com
- [CHIPS Explainer](https://github.com/privacycg/CHIPS)
