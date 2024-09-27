---
title: Cookies Having Independent Partitioned State (CHIPS)
slug: Web/Privacy/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

**Cookies Having Independent Partitioned State** (**CHIPS**, auch bekannt als **Partitioned cookies**) ermöglicht es Entwicklern, ein Cookie in partitionierten Speicher zu integrieren, wobei es ein separates Cookie-Jar pro Top-Level-Site gibt.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies Diensten ermöglichen, Benutzer zu verfolgen und ihre Informationen über nicht verwandte Top-Level-Sites hinweg zu verknüpfen. Cookies, die als `Partitioned` gekennzeichnet sind, werden doppelt verknüpft: nach dem Ursprung, der sie setzt, _und_ nach dem Ursprung der Top-Level-Seite.

Das bedeutet, dass sie nur im Kontext der Top-Level-Website gelesen werden können, auf der sie gesetzt wurden. Dies blockiert das Tracking über Websites hinweg, während es dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht, wie das Beibehalten des Zustands eingebetteter Karten- oder Chat-Widgets über eine Domain und deren Subdomains hinweg sowie das Beibehalten von Konfigurationsinformationen für Subressourcen-CDN-Lastverteilung und Anbieter von Headless-CMS.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, schauen wir uns ein kurzes Beispiel an. Historisch gesehen, wenn eine Seite Inhalte über ein {{htmlelement("iframe")}} einbettet, konnte der eingebettete Inhalt ein Cookie auf dem Gerät des Benutzers als Antwort auf die Anfrage von einer Domain setzen. Wenn der Benutzer andere Seiten besucht, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich von der ersten Instanz des eingebetteten Inhalts gesetzt wurde. Dies ermöglicht es dem Inhaltsanbieter, die Benutzeraktivität über diese Seiten hinweg zu verfolgen und auf allen anderen Seiten, die denselben Inhalt einbetten.

Zum Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers.
2. Der Benutzer besucht `https://site-b.example`, die ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Benutzer auf der vorherigen Seite war.

Das funktioniert, weil Cookies historisch gesehen mit einem Schlüssel basierend auf dem Host oder Domain-Namen der Webseite, die sie gesetzt hat, gespeichert wurden, dem sogenannten **Host-Schlüssel**. In obigem Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert werden.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — an, das es Website-Betreibern ermöglicht, die Nutzung von CHIPS zu aktivieren:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Zusätzlich können Sie das `__Host` Präfix verwenden, wenn Sie partitionierte Cookies setzen, um sie nur an die aktuelle Domain oder Subdomain zu binden, was empfohlen wird, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit `Partitioned` gesetzte Drittanbieter-Cookies werden mit zwei Schlüsseln gespeichert, dem Host-Schlüssel und einem neuen **Partitionierungs-Schlüssel**. Der Partitionierungs-Schlüssel basiert auf dem Schema und [eTLD+1](/de/docs/Glossary/eTLD) der Top-Level-URL, die der Browser besucht hat, als die Anfrage an den URL-Endpunkt erfolgte, der das Cookie gesetzt hat.

Nochmal unser Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, die Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, was bedeutet, dass der Site-Betreiber sich für die Nutzung von CHIPS entscheidet.
2. Der Speicherschlüssel für das Cookie wäre jetzt `{("https://site-a.example"), ("3rd-party.example")}`.
3. Wenn der Benutzer `https://site-b.example` besucht, die ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, weil der Partitionierungs-Schlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ist ähnlich dem [State-Partitionierungs-Mechanismus](/de/docs/Web/Privacy/State_Partitioning), der von Firefox implementiert wurde. Der Unterschied besteht darin, dass die State Partitionierung die Cookie-Speicherung und -Wiederherstellung in separate Cookie-Jars für jede Top-Level-Site aufteilt, ohne einen Mechanismus zur Wahlmöglichkeit für Drittanbieter-Cookies, falls gewünscht. Während Browser beginnen, die Nutzung von Drittanbieter-Cookies abzuschaffen, gibt es noch gültige, nicht-tracking-bezogene Verwendungen von Drittanbieter-Cookies, die erlaubt werden müssen, während Entwickler beginnen, mit dieser Änderung umzugehen.

## CHIPS und Subdomains

CHIPS erlaubt immer noch, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Seite eingebettet sind, auf Drittanbieter-Cookies zugreifen, die von diesen Inhalten gesetzt wurden. Sehen wir uns ein Beispiel eines Einzelhandelssystems an, das einen Drittanbieter-Chatdienst verwendet:

1. Ein Benutzer besucht `https://shoppy.example`, das einen Drittanbieter-Chatdienst von `https://3rd-party.example/chat` einbettet, um Benutzern Unterstützung zu bieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, um den Zustand des Chats über verschiedene Subdomains der Seite hinweg beizubehalten.
2. Der Speicherschlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}`.
3. Der Benutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, weil der Partitionierungs-Schlüssel immer noch übereinstimmt.

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
