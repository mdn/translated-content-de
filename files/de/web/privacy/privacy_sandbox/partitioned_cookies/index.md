---
title: Cookies mit unabhängigem partitioniertem Status (CHIPS)
slug: Web/Privacy/Privacy_sandbox/Partitioned_cookies
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

**Cookies mit unabhängigem partitionierten Status** (**CHIPS**, auch bekannt als **Partitionierte Cookies**) ermöglichen es Entwicklern, ein Cookie in einen partitionierten Speicher einzubinden, mit einem separaten Cookie-Speicher pro Top-Level-Site.

Ohne Cookie-Partitionierung können Drittanbieter-Cookies es Diensten ermöglichen, Benutzer zu verfolgen und ihre Informationen über nicht zusammenhängende Top-Level-Sites hinweg zu verknüpfen. Cookies, die als `Partitioned` gekennzeichnet sind, sind doppelt indiziert: durch den Ursprung, der sie setzt, _und_ den Ursprung der Top-Level-Seite.

Das bedeutet, dass sie nur im Kontext der Top-Level-Site gelesen werden können, auf der sie gesetzt wurden. Dies ermöglicht es, Cross-Site-Tracking zu blockieren, während dennoch legitime Verwendungen von Drittanbieter-Cookies ermöglicht werden, wie das Beibehalten des Status eingebetteter Karten oder Chat-Widgets über eine Domain und ihre Subdomains hinweg, sowie das Speichern von Konfigurationsinformationen für Subresource-CDN-Lastverteilung und Headless-CMS-Anbieter.

## Wie funktioniert CHIPS?

Um zu verstehen, wie CHIPS funktioniert, betrachten wir ein kurzes Beispiel. Historisch gesehen konnte, wenn eine Seite Inhalte über ein {{htmlelement("iframe")}} eingebettet hat, der eingebettete Inhalt ein Cookie auf dem Gerät des Benutzers als Antwort auf die Cross-Site-Anfrage setzen. Wenn der Benutzer andere Seiten besucht, die denselben Inhalt einbetten, kann der eingebettete Inhalt auf dasselbe Cookie zugreifen, das ursprünglich durch die erste Instanz des eingebetteten Inhalts gesetzt wurde. Dies ermöglicht es dem Inhaltsanbieter, die Benutzeraktivität über diese Seiten hinweg zu verfolgen, und auch über andere Seiten, die denselben Inhalt einbetten.

Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers.
2. Der Benutzer besucht `https://site-b.example`, das ebenfalls `https://3rd-party.example` einbettet. Diese neue Instanz von `https://3rd-party.example` kann weiterhin auf das Cookie zugreifen, das gesetzt wurde, als der Benutzer auf der vorherigen Seite war.

Dies funktioniert, weil Cookies historisch gesehen mit einem Schlüssel gespeichert wurden, der auf dem Host- oder Domainnamen der Seite basiert, die sie gesetzt hat, auch bekannt als **Host-Schlüssel**. Im obigen Fall würde das Cookie mit einem Schlüssel von `("3rd-party.example")` gespeichert.

Browser mit CHIPS-Unterstützung bieten ein neues Attribut für den {{httpheader("Set-Cookie")}} HTTP-Header — `Partitioned` — das es Website-Besitzern ermöglicht, die Nutzung von CHIPS zu aktivieren:

```http
Set-Cookie: __Host-example=34d8g; SameSite=None; Secure; Path=/; Partitioned;
```

> [!NOTE]
> Partitionierte Cookies müssen mit `Secure` gesetzt werden. Außerdem können Sie das `__Host`-Präfix verwenden, um partitionierte Cookies nur an die aktuelle Domain oder Subdomain zu binden. Dies wird empfohlen, wenn Sie Cookies nicht zwischen Subdomains teilen müssen.

Mit gesetztem `Partitioned` werden Drittanbieter-Cookies mit zwei Schlüsseln gespeichert, dem Host-Schlüssel und einem neuen **Partitionierungs-Schlüssel**. Der Partitionierungs-Schlüssel basiert auf dem Schema und der {{Glossary("eTLD", "eTLD+1")}} der Top-Level-URL, die der Browser besuchte, als die Anfrage an den URL-Endpunkt gestellt wurde, der das Cookie gesetzt hat.

Zurück zu unserem Beispiel:

1. Ein Benutzer besucht `https://site-a.example`, das Inhalte von `https://3rd-party.example` einbettet. `https://3rd-party.example` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, was bedeutet, dass der Website-Besitzer die Nutzung von CHIPS aktiviert.
2. Der Speicher-Schlüssel für das Cookie wäre nun `{("https://site-a.example"), ("3rd-party.example")}`.
3. Wenn der Benutzer `https://site-b.example` besucht, das ebenfalls `https://3rd-party.example` einbettet, kann diese neue eingebettete Instanz nicht mehr auf das Cookie zugreifen, da der Partitionierungs-Schlüssel nicht übereinstimmt.

> [!NOTE]
> CHIPS ist ähnlich dem von Firefox implementierten [Status-Partitionierungsmechanismus](/de/docs/Web/Privacy/State_Partitioning). Der Unterschied besteht darin, dass die Status-Partitionierung die Cookie-Speicherung und -Abruf in separate Cookie-Speicher für jede Top-Level-Site unterteilt, ohne einen Mechanismus zur Ermöglichung des Opt-ins für Drittanbieter-Cookies, falls gewünscht. Während Browser beginnen, die Nutzung von Drittanbieter-Cookies zu reduzieren, gibt es immer noch gültige, nicht-nachverfolgende Verwendungen von Drittanbieter-Cookies, die gestattet sein müssen, während Entwickler beginnen, sich mit dieser Änderung auseinanderzusetzen.

## CHIPS und Subdomains

CHIPS ermöglicht weiterhin, dass Drittanbieter-Inhalte, die über verschiedene Subdomains einer Seite eingebettet sind, auf Drittanbieter-Cookies zugreifen, die von diesen Inhalten gesetzt wurden. Betrachten wir ein Einzelhandelsseiten-Beispiel, das einen Drittanbieter-Chat-Dienst nutzt:

1. Ein Benutzer besucht `https://shoppy.example`, das einen Drittanbieter-Chat-Dienst von `https://3rd-party.example/chat` einbettet, um Unterstützung für Benutzer anzubieten, die Hilfe benötigen. `https://3rd-party.example/chat` setzt ein Cookie auf dem Gerät des Benutzers mit `Partitioned`, um den Status des Chats über verschiedene Subdomains der Seite hinweg beizubehalten.
2. Der Speicher-Schlüssel für das Cookie wäre `{("https://shoppy.example"), ("3rd-party.example/chat")}`.
3. Der Benutzer besucht verschiedene Subdomains, die ebenfalls `https://3rd-party.example/chat` einbetten, einschließlich `https://support.shoppy.example` und `https://checkout.shoppy.example`. Die neuen eingebetteten Instanzen können auf das Cookie zugreifen, da der Partitionierungs-Schlüssel immer noch übereinstimmt.

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
