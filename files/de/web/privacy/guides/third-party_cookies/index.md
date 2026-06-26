---
title: Drittanbieter-Cookies
slug: Web/Privacy/Guides/Third-party_cookies
l10n:
  sourceCommit: 5ef5a171a41dbcb48c953cc3c98c1237566796e9
---

Dieser Artikel erklärt, was Drittanbieter-Cookies sind, beschreibt die damit verbundenen Probleme und erklärt, wie Sie diese Probleme umgehen können.

## Was sind Drittanbieter-Cookies?

Ein [Cookie](/de/docs/Web/HTTP/Guides/Cookies) ist mit einer bestimmten Domain und einem Schema (in der Regel `https`) verbunden und kann auch mit Subdomains verknüpft sein, wenn das {{HTTPHeader("Set-Cookie")}}-Attribut `Domain` gesetzt ist.

- Wenn die Cookie-Domain und das Schema mit der aktuellen Seite übereinstimmen, die der Benutzer gerade ansieht (die URL, die in der Adressleiste des Browsers angezeigt wird), wird das Cookie als vom selben Standort wie die Seite stammend betrachtet und als _First-Party-Cookie_ bezeichnet.
- Wenn die Domain und das Schema unterschiedlich sind, wird das Cookie nicht als vom selben Standort stammend betrachtet und wird als _Drittanbieter-Cookie_ bezeichnet.

> [!NOTE]
> Drittanbieter-Cookies werden manchmal als _cross-site cookies_ bezeichnet. Dies ist möglicherweise ein präziserer Name, da _Drittanbieter-Cookies_ den Besitz durch ein Drittunternehmen oder eine Drittorganisation implizieren. Das Verhalten und die potenziellen Probleme sind jedoch die gleichen, unabhängig davon, ob Sie alle beteiligten Websites besitzen oder nicht. Zum Beispiel könnte eine Website Ressourcen wie Bilder von einer anderen Domain verwenden, die sie besitzen.

Ein First-Party-Cookie kann gesetzt werden, wenn ein Benutzer zum ersten Mal eine Seite besucht, einem internen Link zu einer anderen Seite auf derselben Website folgt oder eine Ressource anfordert, die sich auf derselben Website befindet (zum Beispiel ein eingebettetes Bild, Web-Fonts oder eine JavaScript-Datei).

Drittanbieter-Cookies werden in den folgenden gängigen Situationen gesendet:

- Wenn ein Link auf einer Website angeklickt wird, um zu einer anderen Website zu navigieren.
- Wenn eine Seite Komponenten von anderen Sites einbettet, wie z. B. Bilder oder andere Dokumente, die in {{htmlelement("iframe")}}s eingebettet sind (oft als _Drittanbieter-Inhalte_ bezeichnet). Zusätzlich zur ursprünglichen Anforderung für die Komponente können diese Komponenten weitere Anfragen generieren, die mehr Drittanbieter-Cookies setzen.

## Wofür werden Drittanbieter-Cookies verwendet?

Drittanbieter-Cookies, die beim Klicken auf Links zu anderen Websites gesetzt werden, werden für verschiedene Zwecke verwendet. Beispielsweise könnten Sie einen Affiliate-Link zu einer Partnerseite haben und beim Klick des Nutzers auf den Link ein Cookie setzen, damit ein Belohnungsbanner mit einem Rabatt angezeigt werden kann, wenn ein bestimmtes Produkt gekauft wird, oder eine Provision an den Verweisenden zurückgezahlt werden kann.

Drittanbieter-Inhalte, die Cookies setzen, haben ebenfalls viele verschiedene Verwendungszwecke. Beispielsweise könnten Sie ein Anmelde-Widget haben, das auf mehreren verschiedenen, aber verwandten Sites eingebettet ist und ein Cookie über alle Sites hinweg teilt, das bestätigt, dass der Benutzer angemeldet ist, sodass er sich nicht auf jeder Website erneut anmelden muss.

Andere Anwendungsfälle für Drittanbieter-Cookies umfassen:

- Teilen von Benutzerpräferenzen oder Themeninformationen über mehrere Sites hinweg.
- Sammeln von Analysen über mehrere Sites hinweg.
- Zählen von Anzeigenimpressionen und Aufzeichnen von Benutzerinteressen, um Ad-Tech-Plattformen zu ermöglichen, relevantere Anzeigen zu schalten.

Lassen Sie uns das oben erwähnte Beispiel des Anmelde-Widgets mit einem fiktiven Unternehmen weiter veranschaulichen, das separate Domainen für seinen Online-Shop (`shop.site`), die Community-Diskussionsforen (`forum.site`) und den Kundenservice und Rücksendungen (`service.site`) hat.

Jede der drei Websites hat ein eingebettetes Anmelde-Widget, das auf `auth.site` gehostet wird, um den Anmeldestatus auf den Websites zu erhalten. Ein Benutzer kann sich auf einer dieser Sites anmelden und ein Cookie, das eine Sitzungs-ID auf dem Browser für `auth.site` enthält, wird gesetzt. Wenn der Benutzer zu einer der anderen Sites geht, hat die eingebettete `auth.site`-Instanz Zugriff auf das Sitzungs-ID-Cookie, das beim Anmelden auf dem ersten Standort gesetzt wurde. Es kann dies an den Server senden, prüfen, ob es noch gültig ist, und sich sofort auf dieser Site anmelden.

![Visuelle Darstellung der obigen Beschreibung des Drittanbieter-Anmeldesystems](https://mdn.github.io/shared-assets/images/diagrams/http/cookies/3pc-example.png)

## Was ist das Problem mit Drittanbieter-Cookies?

Die oben genannten Anwendungsfälle klingen harmlos genug. Drittanbieter-Cookies können jedoch auch ohne die Zustimmung des Benutzers für illegitime Zwecke verwendet werden, die technisch nicht von legitimen Anwendungsfällen zu unterscheiden sind.

Das Folgen eines Links zu einem Drittanbieter oder das Interagieren mit Drittanbieter-Inhalten, die in einem `<iframe>` eingebettet sind (zum Beispiel Ausfüllen eines Formulars oder Klicken auf einen Button), könnte dazu führen, dass Cookies gesetzt werden, die die Daten eines Benutzers in die Hände von jemandem legen, den dieser nicht erwartet hat. Diese Informationen könnten verwendet werden, um:

- Benutzer im Web mit gezielten Anzeigen zu verfolgen, wann immer sie nach Informationen zu einem bestimmten Produkt suchen.
- Benutzer mit Spam-E-Mails oder Telefonanrufen zu belästigen.
- Ihr Verhalten zu manipulieren, um bestimmte Optionen zu wählen, die den Partnerumsatz erhöhen oder Statistiken verfälschen.

Einzeln betrachtet sind solche Fälle schon schlimm genug, aber es wird noch schlimmer. Drittanbieter-Server können Informationen aus mehreren Drittanbieter-Cookies kombinieren, die auf verschiedenen Sites gesetzt werden, auf denen Drittanbieter-Inhalte eingebettet sind, um ein detailliertes Profil der Surfgewohnheiten, Interessen, Gewohnheiten und persönlichen Informationen eines Benutzers zu erstellen. Dies kann verwendet werden, um gruselige, aufdringliche Benutzererfahrungen zu schaffen, Benutzer zu betrügen oder sogar Identitätsdiebstahl zu begehen.

In solchen Fällen werden Drittanbieter-Cookies als _Tracking-Cookies_ bezeichnet.

> [!NOTE]
> Benutzerinformationen, die durch illegitime Mittel erlangt werden, werden ebenfalls oft an andere Dritte verkauft, was das Problem weiter vervielfacht.

Gesetze wie die [Datenschutz-Grundverordnung](https://gdpr.eu/) (DSGVO) in der Europäischen Union und das [California Consumer Privacy Act](https://www.oag.ca.gov/privacy/ccpa) (CCPA) haben zu mehr Transparenz über die gesetzten Cookies und die gesammelten Informationen geführt, indem sie Unternehmen rechtlich dazu verpflichten, transparent zu sein. Beispiele umfassen das Bitten der Kunden, in die Datensammlungen einzuwilligen, ihnen zu erlauben zu sehen, welche Daten ein Unternehmen über sie hält, und die Daten zu löschen, wenn sie es wünschen. Trotzdem ist es den Kunden nicht immer klar, wie ihre Daten verwendet werden.

## Wie gehen Browser mit Drittanbieter-Cookies um?

Browserhersteller wissen, dass Benutzer das oben beschriebene Verhalten nicht mögen. Um die negativen Auswirkungen auf die Benutzererfahrung zu mindern, haben einige begonnen, Drittanbieter-Cookies standardmäßig zu blockieren und alternative Mechanismen für die Entwicklung legitimer Anwendungsfälle für Drittanbieter-Cookies wurden implementiert (siehe [Den Übergang von Drittanbieter-Cookies](#den_übergang_von_drittanbieter-cookies)).

Die folgende Liste beschreibt den Stand der Drittanbieter-Cookie-Blockierung in einer Auswahl von Browsern:

- Firefox ermöglicht [Total Cookie Protection](https://blog.mozilla.org/en/mozilla/firefox-rolls-out-total-cookie-protection-by-default-to-all-users-worldwide/), wenn der [Erweiterte Tracking-Schutz](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) aktiviert ist, was per Standard der Fall ist. Dies gibt Drittanbieter-Cookies ein separates Cookie-Glas pro Website und verhindert Cross-Site-Tracking.
- Safari hat eine [Tracking-Verhinderungsrichtlinie](https://webkit.org/tracking-prevention-policy/), die zu einem ähnlichen Satz an Drittanbieter-Cookie-Schutzmaßnahmen führt, die standardmäßig aktiviert sind; siehe [Intelligent Tracking Prevention](https://webkit.org/tracking-prevention/#intelligent-tracking-prevention-itp) (ITP) für Details.
- Google Chrome blockiert Drittanbieter-Cookies nicht standardmäßig, sondern nur im Inkognito-Modus oder wenn Benutzer es explizit unter `chrome://settings` einstellen.
- Edge blockiert Tracker von unbesuchten Websiten und blockiert standardmäßig bekannte schädliche Tracker. Siehe [Tracking prevention](https://learn.microsoft.com/en-us/microsoft-edge/web-platform/tracking-prevention) für mehr Informationen.
- Der [Brave Browser](https://brave.com/) blockiert Tracking-Cookies standardmäßig.

Es ist möglich, die Nutzung von Drittanbieter-Cookies im Einzelfall in Firefox, Chrome und Edge über die Browsereinstellungen zuzulassen. In Safari ist die Steuerung jedoch eingeschränkter – Sie können die Prävention von Cross-Site-Tracking abschalten, aber den Zugriff auf Drittanbieter-Cookies pro Frame kann nur auf Code-Ebene über die [Storage Access API](/de/docs/Web/API/Storage_Access_API) gesteuert werden.

> [!NOTE]
> Drittanbieter-Cookies (oder einfach Tracking-Cookies) können auch durch Browser-Erweiterungen blockiert werden.

Das Blockieren von Cookies kann dazu führen, dass die Funktionalität von Websites und Drittanbieter-Komponenten (wie z. B. Social-Media-Widgets) nicht wie vorgesehen funktioniert. Daher schließen Browser Ausnahmen und Heuristiken in ihren Quellcode ein, um langjährige Probleme mit Drittanbieter-Cookies bei beliebten Websites zu umgehen.

Im Allgemeinen sollten Entwickler beginnen, Wege zu finden, um die Umstände zu begrenzen, unter denen Drittanbieter-Cookies gesendet werden, um ihr Potenzial für Datenschutzverletzungen zu reduzieren, und die Abhängigkeit von ihnen zu verringern.

## Beschränkung von Drittanbieter-Cookies mit `SameSite`

Das Attribut [`SameSite`](/de/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) ermöglicht es Servern, festzulegen, ob/wann Drittanbieter-Cookies gesendet werden. Wenn Sie `SameSite` nicht in Ihren `Set-Cookie`-Headern angeben, wird der Standardwert verwendet, der in Chromium-basierten Browsern `Lax` ist und in anderen Browsern unterschiedlich ausfällt. Daher wird empfohlen, `SameSite` explizit zu setzen, um ein konsistentes Verhalten sicherzustellen.

Sie sollten versuchen, `Lax` als vernünftigen Standard in Ihren Apps zu verwenden, wo immer es möglich ist. Dies weist den Browser an, Drittanbieter-Cookies nicht zu senden, außer wenn der Benutzer von einer anderen Site zur Herkunfts-Website des Cookies navigiert. Dies ist nützlich, wenn Sie Cookies sofort senden möchten, sobald ein Benutzer von einer anderen Site zu Ihrer Site navigiert, zum Beispiel um die Erfahrung sofort nach dem Eintreffen zu personalisieren.

Wenn Sie jedoch Inhalte über mehrere Sites hinweg in `<iframe>`s einbetten und sich auf Drittanbieter-Cookies für Funktionalität verlassen, zum Beispiel im Fall des oben genannten Anmeldebeispiels, müssen Sie explizit `SameSite=None` setzen, damit der Browser diese Cookies weitergeben kann:

```http
Set-Cookie: widget_session=7yjgj57e4n3d; SameSite=None; Secure; HttpOnly
```

Beachten Sie, dass, wenn `SameSite=None` gesetzt ist, auch das `Secure`-Attribut gesetzt sein muss – `SameSite=None` erfordert einen _sicheren Kontext_. Im obigen Beispiel haben wir auch das `HttpOnly`-Attribut gesetzt, um den JavaScript-Zugriff auf das Cookie (z.B. über [`Document.cookie`](/de/docs/Web/API/Document/cookie)) zu deaktivieren. Cookies, die sensible Informationen enthalten, sollten immer das `HttpOnly`-Attribut gesetzt haben – es wäre sehr unsicher, sie JavaScript zugänglich zu machen. Diese Vorsichtsmaßnahme hilft, Cross-Site-Scripting ([XSS](/de/docs/Web/Security/Attacks/XSS))-Angriffe zu mildern.

> [!NOTE]
> Cookies, die für sensible Informationen verwendet werden, sollten ebenfalls eine kurze [Lebensdauer](/de/docs/Web/HTTP/Guides/Cookies#removal_defining_the_lifetime_of_a_cookie) haben.

> [!NOTE]
> Sie können einen `SameSite`-Attributwert von `Strict` auf Cookies setzen, wenn Sie möchten, dass sie nur bei Anforderungen gesendet werden, die von derselben Site stammen, die das Cookie gesetzt hat. Dies blockiert effektiv, dass Drittanbieter-Cookies unter jeglichen Umständen gesendet werden.

## Den Übergang von Drittanbieter-Cookies

Es gibt mehrere Strategien, um zu helfen, Sites zu minimieren, die in Browsern, in denen Drittanbieter-Cookies blockiert sind, nicht mehr funktionieren:

1. Überprüfen Sie Ihren Drittanbieter-Cookie-Einsatz. Cookies müssen das Attribut `SameSite=None` gesetzt haben, um in einem Cross-Site-Kontext verwendet zu werden. Sie können daher Drittanbieter-Cookies identifizieren, indem Sie nach `SameSite=None` in Ihrem Code suchen oder gespeicherte `SameSite=None`-Cookies in Ihren Browser DevTools überprüfen, beispielsweise im [Firefox Storage Inspector](https://firefox-source-docs.mozilla.org/devtools-user/storage_inspector/). Chromes [Probleme-Panel](https://developer.chrome.com/docs/devtools/issues/) [meldet ebenfalls Probleme mit Drittanbieter-Cookie-Blockierung](https://privacysandbox.google.com/cookies/prepare/audit-cookies#chrome-dev-tools) zusammen mit einer Liste der betroffenen Cookies.
2. Testen Sie Ihre Funktionalität mit blockierten Drittanbieter-Cookies, um zu sehen, was nicht funktioniert. Sie könnten feststellen, dass einige Cookies nicht mehr benötigt werden.
3. Zunächst könnten Sie Ihren Code so widerstandsfähig machen, dass er eine weniger personalisierte Erfahrung bietet, wenn Drittanbieter-Cookie-Daten nicht verfügbar sind, anstatt sie vollständig zu brechen. Folgen Sie den Prinzipien der {{Glossary("Graceful_degradation", "sanften Degradation")}}.
4. Erhalten Sie Daten über alternative Mittel wie Benutzerumfragen oder Quizze oder betrachten Sie Daten, die Sie bereits haben, um Trends zu erkennen (zum Beispiel Bestellverlauf).
5. Verwenden Sie einen alternativen Client-seitigen Speichermechanismus wie [Web Storage](/de/docs/Web/API/Web_Storage_API), um Daten zu speichern, oder ziehen Sie eine serverseitige Lösung in Betracht.
6. Wenn Ihre Drittanbieter-Cookies nur über eine kleine Anzahl von verwandten, bekannten Webseiten hinweg verwendet werden, könnten Sie die [Storage Access API](/de/docs/Web/API/Storage_Access_API) nutzen, um den Zugriff auf Drittanbieter-Cookies nur für diese spezifischen Sites zu ermöglichen. Die Storage Access API fordert den Benutzer auf, die Erlaubnis zu erteilen, dass eine Website Drittanbieter-Cookies pro Frame verwenden darf.
7. Wenn Ihre Drittanbieter-Cookies im 1:1-Verhältnis mit den Top-Level-Sites verwendet werden, auf denen sie generiert werden, könnten Sie [Cookies Having Independent Partitioned State](/de/docs/Web/Privacy/Guides/Third-party_cookies/Partitioned_cookies) (CHIPS, auch als opt-in partitioned cookies bekannt) verwenden, um Ihre Cookies in partitionierten Speicher mit einem separaten Cookie-Glas pro Top-Level-Site zu optieren. Dies erfordert lediglich das Hinzufügen des `partitioned` Attributs zu Ihren bestehenden Cross-Site-Cookies. Sie können dann uneingeschränkt verwendet werden, aber sie können nicht mit anderen Seiten geteilt werden.

## Siehe auch

- [HTTP-Cookies](/de/docs/Web/HTTP/Guides/Cookies)
- [Datenschutz im Web](/de/docs/Web/Privacy)
