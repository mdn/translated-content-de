---
title: Verwenden der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten Cross-Site-Dokumenten verwendet werden, um zu überprüfen, ob sie Zugriff auf [Drittanbieter-Cookies](/de/docs/Web/Privacy/Third-party_cookies) und einen [unpartitionierten Zustand](/de/docs/Web/Privacy/State_Partitioning#state_partitioning) haben und, falls nicht, um Zugriff zu beantragen. Wir werfen einen kurzen Blick auf ein gängiges Szenario zum Speicherzugriff.

> [!NOTE]
> Wenn wir im Zusammenhang mit der Storage Access API über Drittanbieter-Cookies sprechen, meinen wir implizit [_unpartitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Drittanbieter-Cookies.

## Verwendungshinweise

Die Storage Access API wurde entwickelt, um eingebetteten Inhalten den Zugriff auf Drittanbieter-Cookies und einen unpartitionierten Zustand zu ermöglichen – die meisten modernen Browser blockieren einen solchen Zugriff standardmäßig zum Schutz der Privatsphäre der Benutzer. Da eingebettete Inhalte nicht wissen, wie sich ein Browser in dieser Hinsicht verhalten wird, ist es am besten, immer zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherzugriff hat, bevor versucht wird, einen Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser oft ein leeres Cookie-Verzeichnis zurückgeben, wenn der Zugriff auf Drittanbieter-Cookies blockiert ist.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes Cross-Site-{{htmlelement("iframe")}} auf Drittanbieter-Cookies und einen unpartitionierten Zustand zugreifen kann, wenn eine Speicherzugriffsrichtlinie des Browsers den Zugriff darauf ansonsten blockieren würde.

## Erlauben eines sandboxed `<iframe>`, die API zu verwenden

Zunächst einmal muss die einbettende Website, wenn das `<iframe>` sandboxed ist, das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Element/iframe#sandbox) hinzufügen, um erfolgreiche Anfragen der Storage Access API zu ermöglichen, zusammen mit `allow-scripts` und `allow-same-origin`, um es einem Skript zu erlauben, die API aufzurufen und in einer Herkunft auszuführen, die Cookies und den Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern des Speicherzugriffs

Nun zum Code, der im eingebetteten Dokument ausgeführt wird. In diesem Code:

1. Zunächst verwenden wir eine Feature-Erkennung (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir unseren Code aus, der trotzdem auf Cookies zugreift, und hoffen, dass er funktioniert. Er sollte ohnehin defensiv programmiert sein, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet dies, dass dieses {{htmlelement("iframe")}} bereits Zugriff erhalten hat, und wir können sofort unseren Code ausführen, der auf Cookies und den Zustand zugreift.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu überprüfen, ob die Erlaubnis zum Zugriff auf Drittanbieter-Cookies und einen unpartitionierten Zustand bereits erteilt wurde (d.h. einem anderen gleichartigen Embed). Wir umschließen diesen gesamten Abschnitt in einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block, weil [einige Browser die Berechtigung `"storage-access"` nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was dazu führen kann, dass der `query()`-Aufruf eine Ausnahme auslöst. Wenn dies der Fall ist, berichten wir es der Konsole und versuchen dennoch, den Cookie-Code auszuführen.
5. Wenn der Berechtigungsstatus `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer Zeit spart, und dann können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
6. Wenn der Berechtigungsstatus `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Eingabeaufforderung für den Benutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code ausführen, der auf Cookies und Zustand zugreift.
7. Wenn der Berechtigungsstatus `"denied"` ist, hat der Benutzer unsere Anfragen zum Zugriff auf Drittanbieter-Cookies oder einen unpartitionierten Zustand abgelehnt, und unser Code kann diese nicht verwenden.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> **Hinweis:** `requestStorageAccess()`-Anfragen werden automatisch abgelehnt, es sei denn, die eingebetteten Inhalte verarbeiten gerade eine Benutzeraktion wie ein Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder wenn die Erlaubnis bereits zuvor erteilt wurde. Wenn die Erlaubnis zuvor nicht erteilt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines auf Benutzeraktionen basierenden Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das nur in Chrome verfügbare [verwandte Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets)-Feature kann als Mechanismus der progressiven Verbesserung betrachtet werden, das zusammen mit der Storage Access API funktioniert – unterstützende Browser gewähren standardmäßigen Drittanbieter-Cookie- und unpartitionierten Zustand-Zugriff zwischen Websites im selben Set. Das bedeutet, dass nicht durch den üblichen Erlaubnisabfrage-Workflow gegangen werden muss, was eine benutzerfreundlichere Erfahrung für Benutzer von Websites im Set bedeutet.

## Beantragung des Speicherzugriffs von der Top-Level-Website im Auftrag eingebetteter Ressourcen

Die oben beschriebenen Storage Access API-Funktionen ermöglichen es einem eingebetteten Dokument, den eigenen Drittanbieter-Cookie-Zugriff zu beantragen. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung der Storage Access API, die es Top-Level-Websites ermöglicht, Speicherzugriff im Namen bestimmter verwandter Ursprünge zu beantragen.

Die `requestStorageAccessFor()`-Methode adressiert Herausforderungen bei der Einführung der Storage Access API auf Top-Level-Websites, die Cross-Site-Bilder oder Skripte verwenden, die Cookies erfordern. Sie kann Drittanbieter-Cookie-Zugriff für Cross-Site-Ressourcen ermöglichen, die direkt in die Top-Level-Website eingebettet sind und ihren eigenen Speicherzugriff nicht beantragen können, beispielsweise über {{htmlelement("img")}} oder {{htmlelement("script")}}-Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende Top-Level-Seite als auch die eingebettete Ressource, für die der Speicherzugriff beantragt wird, Teil desselben [verwandten Website-Sets](/de/docs/Web/API/Storage_Access_API/Related_website_sets) sein.

Typische Verwendung von `requestStorageAccessFor()` sieht wie folgt aus (diesmal im regulären Promise-Stil statt async/await geschrieben):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Im Gegensatz zu `requestStorageAccess()` überprüft Chrome nicht auf eine Interaktion in einem Top-Level-Dokument in den letzten 30 Tagen, wenn `requestStorageAccessFor()` aufgerufen wird, da der Benutzer sich bereits auf der Seite befindet. Weitere Details zu diesem Verhalten finden Sie unter [Browser-spezifische Unterschiede > Chrome](/de/docs/Web/API/Storage_Access_API#chrome).

Wenn der Berechtigungsstatus für Speicherzugriffsanfragen abgefragt wird, die im Namen eines anderen Ursprungs gemacht wurden, ist der verwendete Berechtigungname anders als im Rest der Storage Access API: `"top-level-storage-access"` anstelle von `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob die Erlaubnis bereits dem Ursprung erteilt wurde oder ob der Cookie-Zugriff noch angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir mit der Verwendung von Cookies beginnen; `requestStorageAccessFor()` wurde bereits aufgerufen, sodass es nicht erneut aufgerufen werden muss.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb eines Benutzergestus aufrufen, wie z.B. einem Klick auf eine Schaltfläche.

Nachdem die Berechtigung `"top-level-storage-access"` erteilt wurde, schließen Cross-Site-Anfragen Cookies ein, wenn sie [CORS](/de/docs/Web/HTTP/CORS) / [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin) enthalten, sodass Websites vielleicht warten möchten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden, und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
